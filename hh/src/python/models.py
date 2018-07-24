import helpers
from torch import nn, load, save, optim


#patch based classifier
class PatchCNN():
    def __init__(self, args):
        self.args = args
        self.model = Patch_Classifier(args.num_classes)

        if args.weights == "":
            self.model.apply(helpers.weights_init)
        else:
            self.model.load_state_dict(load(args.weights))

        if args.mode == "train":
            self.loss = nn.CrossEntropyLoss()
            self.opt = optim.Adam(self.model.parameters(), lr=args.lr)
        else:
            self.eval()

    def train_on_batch(self, epoch, batch_num, num_batches, patches, classes, log_file=None):
        if self.args.mode == "train":
            if self.args.use_cuda:
                patches = patches.cuda(device_id=self.args.device_id)
                classes = classes.cuda(device_id=self.args.device_id)

            self.model.zero_grad()
            preds = self.model(patches)
            loss = self.loss(preds, classes)
            loss.backward()
            self.opt.step()

            print("[%d][%d/%d] Loss: %.4f"
                        % (epoch, batch_num + 1, num_batches, loss.item()), file=log_file)
        else:
            raise ValueError("Patch classifier not declared in train mode")

    def classify(self, patch):
        if self.args.use_cuda:
            patch = patch.cuda(device_id=self.args.device_id)

        return self.model(patch).cpu() if patch.is_cuda else self.model(patch)

    def anneal_lr(self, val=10, log_file=None):
        self.args.lr /= val
        self.opt = optim.Adam(self.model.parameters(), lr=self.args.lr)
        print("Annealing learning rate! New learning rate: %f" % self.args.lr, file=log_file)

    def save_weights(self):
        if self.args.use_cuda:
            self.model.cpu()

        save(self.model.state_dict(), "%s/%s.pth" % (self.args.out_folder, self.args.weights_file))

        if self.args.use_cuda:
            self.model.cuda(device_id=self.args.device_id)

    def train(self):
        self.model.train()

    def eval(self):
        self.model.eval()

    def to_cuda(self):
        self.model.cuda(device_id=self.args.device_id)

        if self.args.mode == "train":
            self.loss.cuda(device_id=self.args.device_id)


#classifier network definition
class Patch_Classifier(nn.Module):
    def __init__(self, num_classes):
        super(Patch_Classifier, self).__init__()

        conv_seq = [
                nn.Conv2d(3, 64, 3, padding=1), nn.BatchNorm2d(64), nn.PReLU(),
                nn.Conv2d(64, 64, 3, padding=1), nn.BatchNorm2d(64), nn.PReLU(),
                nn.Conv2d(64, 64, 3, padding=1), nn.BatchNorm2d(64), nn.PReLU()
            ]
        linear_seq = [
                nn.Linear(1600, 256), nn.BatchNorm1d(256), nn.PReLU(),
                nn.Linear(256, num_classes)
            ]

        self.feature_extractor = nn.Sequential(*conv_seq)
        self.classifier = nn.Sequential(*linear_seq)

    def forward(self, x):
        y = self.feature_extractor(x)
        y = y.view(y.size(0), -1)
        return self.classifier(y)

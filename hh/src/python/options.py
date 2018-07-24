import argparse


#PatchCNN options
class PatchCNNOptions():
    def __init__(self):
        self.parser = argparse.ArgumentParser()

        self.parser.add_argument('--data_path', default="./ulcer_dataset", help="path to dataset root")
        self.parser.add_argument('--num_classes', type=int, default=2, help="number of ulcer tissue types")
        self.parser.add_argument('--patch_size', type=int, default=5, help="size of patches to extract")
        self.parser.add_argument('--patch_stride', type=int, default=2, help="stride for patch extraction")
        self.parser.add_argument('--weights', default="", help="path to model weights")
        self.parser.add_argument('--out_folder', default="./patch_weights", help="folder to store model weights")
        self.parser.add_argument('--log_file', default="./log.txt", help="file to log output to")
        self.parser.add_argument('--weights_file', default="patch_weights", help="file name to save weights to")
        self.parser.add_argument('--lr', type=float, default=1e-4, help="initial learning rate for Adam optimizer")
        self.parser.add_argument('--batch_size', type=int, default=64, help="number of images per batch")
        self.parser.add_argument('--anneal_lr_epochs', type=int, default=2, help="epochs to wait before decaying lr based on val accuracy")
        self.parser.add_argument('--early_stopping_epochs', type=int, default=3, help="epochs to wait before early stopping based on val accuracy")
        self.parser.add_argument('--anneal_lr_threshold', type=float, default=.005, help="validation accuracy threshold for decaying lr")
        self.parser.add_argument('--early_stopping_threshold', type=float, default=1e-5, help="validation accuracy threshold for early stopping")
        self.parser.add_argument('--min_num_anneals', type=int, default=2, help="require this many lr anneals before stopping")
        self.parser.add_argument('--use_cuda', type=int, default=0, help="use GPU to train model")
        self.parser.add_argument('--device_id', type=int, default=0, help="GPU to use for training")
        self.parser.add_argument('--mode', default="train", help="indicates train/test mode")

    def parse(self):
        return self.parser.parse_args()


#deployment options
class TissueTypeOptions():
    def __init__(self):
        self.parser = argparse.ArgumentParser()

        self.parser.add_argument('--image_path', required=True, help="path to image to segment")
        self.parser.add_argument('--patch_size', type=int, default=5, help="size of patches to extract")
        self.parser.add_argument('--segmenter_weights', default="./patch_weights/processed_weights.pth", help="path to ulcer segmentation model weights")
        self.parser.add_argument('--classifier_weights', default="./patch_weights/multi_processed_weights.pth", help="path to tissue type classifier weights")
        self.parser.add_argument('--use_cuda', type=int, default=0, help="run on GPU")
        self.parser.add_argument('--device_id', type=int, default=0, help="GPU to run on")

    def parse(self):
        return self.parser.parse_args()

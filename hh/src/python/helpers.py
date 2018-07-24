import numpy as np
from torch import nn


#initializes network weights using Xavier initialization
def weights_init(m):
    if isinstance(m, nn.Conv2d):
        factor = m.weight.size(1) * m.weight.size(2) * m.weight.size(3)
        m.weight.data.normal_(0.0, np.sqrt(1.0 / factor))
        m.bias.data.fill_(0)
    elif isinstance(m, nn.Linear):
        m.weight.data.normal_(0.0, np.sqrt(1.0 / m.weight.size(1)))
        m.bias.data.fill_(0)
    elif isinstance(m, nn.BatchNorm2d):
        m.weight.data.fill_(1)
        m.bias.data.fill_(0)
    elif isinstance(m, nn.BatchNorm1d):
        m.weight.data.fill_(1)
        m.bias.data.fill_(0)


#gets the top K accuracies for all of the give k values
def get_topk_accuracies(preds, targets, top_k):
    max_k = max(top_k)
    results = np.zeros(len(top_k))

    for i in range(len(preds)):
        _, idxs = preds[i].unsqueeze(0).topk(max_k, sorted=True)
        correct = idxs.eq(targets[i])

        for i in range(len(top_k)):
            results[i] += correct[:, :top_k[i]].max()

    return results / len(preds)

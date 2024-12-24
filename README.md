# Distilled Decoding 1: One-step Sampling of Image Auto-regressive Models with Flow Matching

**[[paper (arXiv)](https://arxiv.org/abs/2412.17153)]**
**[[code](https://github.com/imagination-research/distilled-decoding)]**
**[[website](https://imagination-research.github.io/distilled-decoding)]**


**Authors:** [Enshu Liu (Tsinghua)](https://scholar.google.com/citations?user=0LUhWzoAAAAJ&hl=en)\*, [Xuefei Ning (Tsinghua)](https://www.ningxuefei.cc/), [Yu Wang (Tsinghua)](https://scholar.google.com/citations?user=j8JGVvoAAAAJ&hl=en), [Zinan Lin (Microsoft Research)](https://zinanlin.me/)†

* \* Work mostly done during Enshu Liu's internship at Microsoft Research

* † Project advisor: Zinan Lin


**Abstract:** Autoregressive (AR) models have recently achieved state-of-the-art performance in text and image generation. However, their primary limitation is slow generation speed due to the token-by-token process. We ask an ambitious question: **can a pre-trained AR model be adapted to generate outputs in just *one or two steps***? If successful, this would significantly advance the development and deployment of AR models. We notice that existing works that attempt to speed up AR generation by generating multiple tokens at once fundamentally cannot capture the output distribution due to the conditional dependencies between tokens, limiting their effectiveness for few-step generation. To overcome this, we propose `Distilled Decoding` (`DD`), which leverages flow matching to create a deterministic mapping from Gaussian distribution to the output distribution of the pre-trained AR model. We then train a network to distill this mapping, enabling few-step generation. The entire training process of `DD` does *not* need the training data of the original AR model (as opposed to some other methods), thus making `DD` more practical. 
We evaluate `DD` on state-of-the-art *image* AR models and present promising results. For VAR, which requires 10-step generation (680 tokens), `DD` enables one-step generation (6.3x speed-up), with an acceptable increase in FID from 4.19 to 9.96 on ImageNet. Similarly, for LlamaGen, `DD` reduces generation from 256 steps to 1, achieving an 217.8x speed-up with a comparable FID increase from 4.11 to 11.35 on ImageNet. In both cases, baseline methods completely fail with FID scores >100. 
`DD` also excels on *text-to-image generation*, reducing the generation from 256 steps to 2 for LlamaGen with minimal FID increase from 25.70 to 28.95. 
As the first work to demonstrate the possibility of one-step generation for image AR models, `DD` challenges the prevailing notion that AR models are inherently slow, and opens up new opportunities for efficient AR generation.

## News
* `12/24/2024`: The paper is released [here](https://arxiv.org/abs/2412.17153)
* `12/22/2024`: The project website is released [here](https://imagination-research.github.io/distilled-decoding).
* `12/22/2024`: The code and the pre-trained `DD` models are currently under Microsoft's internal review. We will release them here once the review is done. Please star/watch the repo to get the latest update.

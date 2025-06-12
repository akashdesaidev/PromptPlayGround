# Interactive Prompt Playground

This project is an interactive playground for experimenting with OpenAI's language models (gpt-3.5-turbo and gpt-4) by varying different parameters to observe their impact on generated product descriptions.

## 🔧 How to Run

### If using Python (script version)

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/interactive-prompt-playground
   cd interactive-prompt-playground
   ```
More actions
Output

| Model         | Temperature | Max Tokens | Presence Penalty | Frequency Penalty | Prompt                 | Output Snippet                                                            |
| :------------ | ----------: | ---------: | ---------------: | ----------------: | :--------------------- | :------------------------------------------------------------------------ |
| gpt-3.5-turbo |         0.7 |        150 |                0 |                 0 | Describe an iPhone.... | The iPhone is a sleek and powerful smartphone developed by Apple Inc. ... |
| gpt-3.5-turbo |           0 |        150 |                0 |                 0 | Describe an iPhone.... | The iPhone is a sleek and sophisticated smartphone designed by Apple. ... |
| gpt-3.5-turbo |           2 |        150 |                0 |                 0 | Describe an iPhone.... | The iPhone is an incredibly versatile and innovative mobile device des... |
| gpt-3.5-turbo |         0.7 |         50 |                0 |                 0 | Describe an iPhone.... | The iPhone is a sleek and sophisticated smartphone designed by Apple. ... |
| gpt-3.5-turbo |         0.7 |        100 |                0 |                 0 | Describe an iPhone.... | The iPhone is a cutting-edge smartphone designed and manufactured by A... |
| gpt-3.5-turbo |         0.7 |        100 |              1.5 |                 0 | Describe an iPhone.... | The iPhone is a sleek and stylish smartphone developed by Apple. It fe... |
| gpt-3.5-turbo |         0.7 |        100 |                0 |               1.5 | Describe an iPhone.... | The iPhone is a sleek and stylish smartphone manufactured by Apple. It... |
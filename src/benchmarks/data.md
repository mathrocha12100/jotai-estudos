# Observacoes

- Todos os testes foram executados no Google Chrome v120.0.6099.225
- Todos os testes foram executados em ambiente de dev, entao nao temos as otimizacoes das versoes buildadas
- De maneira geral o `jotai` se mostrou extremamente poderoso em relacao a performance, produtividade e organizacao

# First Render [POST LIST] 2 Initial Items
- [CONTEXT API]: Render: 13.5ms / Layout effects: <0.1ms / Passive effects: 0.6ms
- [JOTAI NORMAL]: Render: 7.3ms / Layout effects: 0.1ms / Passive effects: 0.8m
- [JOTAI SUPER]: Render: 8.2ms / Layout effects: 0.1ms / Passive effects: 0.9ms

# First Render [POST LIST] 200 Initial Items
- [CONTEXT API]: Render: 583.3ms / Layout effects: 0.1ms / Passive effects: 3ms
- [JOTAI NORMAL]: Render: 168.6ms / Layout effects: 0.1ms / Passive effects: 8.8ms
- [JOTAI SUPER]: Render: 175.2ms / Layout effects: 0.1ms / Passive effects: 9.9ms

# State changes [POST LIST] 200 items
- [CONTEXT API]: Render: 495.7ms / Layout effects: <0.1ms / Passive effects: <0.1ms
- [JOTAI NORMAL]: Render: 1.1ms / Layout effects: <0.1ms / Passive effects: <0.1ms
- [JOTAI SUPER]: Render: 1.1ms / Layout effects: <0.1ms / Passive effects: <0.1ms


Claro que para listas grandes e com dados complexos, o ideal seria virtualizarmos a `PostList`
mas o objetivo era justamente testar sem alteracoes a performance

Sobre os `Passive effects` mais altos pelo lado do jotai, provavelmente se deve pela
maneira que o jotai otimiza as coisas por tras dos panos, objetivamente nao vao causar problemas
e o trade-off parece extremamente justo pelos tempos extremamente menores de renderizacoes
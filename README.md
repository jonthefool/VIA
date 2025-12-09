# 👕 VIA - Varal Inteligente Automatizado

![Status](https://img.shields.io/badge/Status-Concluído-green)
![Linguagem](https://img.shields.io/badge/Linguagem-C++%20%7C%20HTML%20%7C%20CSS-blue)
![Plataforma](https://img.shields.io/badge/Plataforma-Arduino-teal)

> **Solução de automação residencial para proteção de roupas contra chuvas inesperadas.**

---

## Sobre o Projeto

O **VIA (Varal Inteligente Automatizado)** é um protótipo desenvolvido como parte da disciplina de **Introdução à Computação** e **Sistemas Digitais** da CESAR School.

### Motivação e Objetivo
A principal motivação foi resolver um problema cotidiano: roupas estendidas no varal que acabam molhando devido a mudanças repentinas no clima. 

O objetivo do VIA é **automatizar o recolhimento do varal** ao detectar aumento na umidade do ar, garantindo que as roupas permaneçam secas sem a necessidade de intervenção humana imediata. Além disso, o sistema foca em segurança (evitando colisões) e acessibilidade (controle remoto).

**Palavras-chave:** Automação, Arduino, Domótica, Sensores, Acessibilidade.

---

## Funcionalidades

* **Monitoramento Climático:** Leitura constante de temperatura e umidade.
* **Atuação Automática:** Recolhe o varal automaticamente se a umidade ultrapassar **90%**.
* **Segurança:** Sensores ultrassônicos detectam obstáculos no trajeto e interrompem o motor para evitar acidentes.
* **Controle Híbrido:** Permite operação automática ou manual através de controle infravermelho (IR).

---

## Componentes e Suprimentos

A lista completa de materiais utilizados na construção do protótipo:

| Componente | Quantidade | Descrição |
| :--- | :---: | :--- |
| **Arduino Uno** | 1 | Microcontrolador principal (Cérebro do sistema). |
| **Sensor DHT11** | 1 | Sensor de temperatura e umidade. |
| **Sensor Ultrassônico (HC-SR04)** | 2 | Detectam obstáculos na frente e atrás do varal. |
| **Servomotores** | 2 | Realizam a tração mecânica para abrir/fechar o varal. |
| **Módulo Receptor IR** | 1 | Recebe comandos do controle remoto. |
| **Controle Remoto IR** | 1 | Permite acionamento manual pelo usuário. |
| **Protoboard** | 1 | Para prototipagem e conexões. |
| **Jumpers (Cabos)** | ~25 | Conexões Macho-Macho e Macho-Fêmea. |

---

## Tecnologias e Ferramentas

* **Hardware:** Arduino IDE (Programação em C++).
* **Web (Documentação):** HTML5, CSS3, JavaScript.
* **Editor de Código:** VS Code.
* **Versionamento:** Git e GitHub.

---

## Como Executar o Projeto

### 1. Montagem do Circuito
Siga o esquema de conexões detalhado na pasta `/img` ou na seção "Modelagem" do site. Certifique-se de conectar os servos nos pinos PWM corretos e os sensores nas portas digitais/analógicas definidas no código.

### 2. Código Arduino
1.  Baixe o arquivo `.ino` localizado na documentação do projeto ou copie o código da página `codigo.html`.
2.  Instale as bibliotecas necessárias na Arduino IDE:
    * `DHT sensor library`
    * `Servo`
    * `IRremote` (ou biblioteca específica para o seu módulo IR)
3.  Carregue o código para a placa Arduino Uno.

### 3. Site de Documentação
Para visualizar a documentação web.

- Utilize o link do Github Pages: [VIA](https://jonthefool.github.io/VIA/).

---

## 👥 Autores

| Função | Nome | GitHub |
| :--- | :--- | :--- |
| **Líder Técnico** | **Luis Henrique Vilas Boas Silva De Sousa** | [Link](https://github.com/Luisvilas) |
| Integrante | Cauã Henrique Melo Almeida | [Link](https://github.com/cauahenrique10) |
| Integrante | João Felipe Bonifácio Barros Da Silva | [Link](https://github.com/jonthefool) |
| Integrante | Victor Barros Roma | [Link](https://github.com/RomaNFS21) |
| Integrante | Pedro Henrique Marques Feitosa | [Link](https://github.com/phmf-dev) |
| Integrante | Rafael Medeiros Machado Dias | [Link](https://github.com/RafaelMMDias) |
| Integrante | Ruan Carlos Oliveira da Silva | [Link](https://github.com/Ruan-M-Oliveira) |

---

## Desafios e Lições Aprendidas

### Desafios
* *O principal desafio foi a calibração e o sincronismo dos servomotores via controle remoto, agravado pela falta de corrente suficiente da placa Arduino para mover ambos com força. Isso gerava falhas e comandos incorretos. A solução foi a implementação de uma fonte de energia externa (baterias) para os motores, estabilizando o sistema.*


### Lições Aprendidas
* *Aprendemos a importância de criar uma máquina de estados no código para gerenciar o modo automático vs. manual.*

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença [MIT](LICENSE).

---
*Projeto desenvolvido para a CESAR School - 2024.2*

# A'Pete's Area Pizzeria

#### A web based ordering system for Pete's Area pizzeria

#### by Adam Smith

## Description

This is a website for an upscale Neapolitano style pizzeria, A'Pete's Area. The ordering system will calculate the price for pizza orders based on the size of the pizza and the toppings added. There will be a base price for a small pizza. Tomato sauce and mozzarella cheese will be included in the base price, however additional toppings will add to the cost of the pizza. Meat and cheese toppings will cost more because the cost of the ingredients is typically higher. Since larger sized pizzas require more toppings for coverage there will be topping prices for different sized pizzas.

The base price for a magro (small) plain cheese pizza will cost $12
  * Example input: Magro plain cheese pizza
  * Expected output: 12

Selecting the mezzano (medium) size will add $4 onto the base price
  * Example input: Mezzano plain cheese pizza
  * Expected output: 16

Selecting the grasso (large) size will add $8 onto the base price
  * Example input: Grasso plain cheese pizza
  * Expected output: 20

Each vegetable topping will add $1 to a magro size pizza
  * Example input: Magro pizza with castelvetrano olive, carmelized onion, and arugula
  * Expected output: 15

Each meat or additional cheese topping will add $2 to a magro pizza
  * Example input: Magro pizza with pancetta, taleggio, and roasted leek
  * Expected output: 17

Toppings for a medium pizza will be 1.5x the magro pizza topping price
  * Example input: Mezzano pizza with calabrese salami, pecorino romano, garlic, and arugula
  * Expected output: 25

Toppings for a large pizza will be 2x the magro pizza topping price
  * Example input: Grasso pizza with fennel sausage, goat cheese, potato, and pickled ramp
  * Expected output: 32

## Setup

Visit the webpage [here](https://alspdx.github.io/apetes-area/).

Alternately you may [Clone this repository](https://github.com/alspdx/apetes-area).

1. Click on the link above.
2. Click the green button marked Clone or download.
3. Click Download ZIP.
4. Unzip file.
5. Open index.html in Chrome or another web browser.

## Technologies used

* Bootstrap 4
* jQuery 3.2.1

## License

Copyright (c) 2017 Adam Smith

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

# Fruit Store

🍓🍌 A library for generating random fruits that adds a burst of flavor to any project.

<br />

## 📦 Installation

install via node

```shell
# using npm
npm install fruit-store

# using yarn
yarn add fruit-store

# using pnpm
pnpm add fruit-store
```

<br />

## 🚀 Quick Start

on Node.js

```javascript
import fruitStore from 'fruit-store';

// Generate a random fruit
fruitStore.roll(); // "🍎"

// Generate an array of random fruits (default count is 1)
fruitStore.rollArray(); // "['🍇']"

// Generate an array of 3 random fruits
fruitStore.rollArray(3); // "['🍌', '🍇', '🍑']"
```

<br />

## 🔗 API

#### `roll()`

Generates a random fruit emoji.

##### Returns

A string representing a random fruit emoji.

#### `rollArray(count: number = 1)`

Generates an array of random fruit emojis.

##### Parameters

count (optional): Number of fruits to generate. Default is 1.

##### Returns

An array of strings representing random fruit emojis.

<br />

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

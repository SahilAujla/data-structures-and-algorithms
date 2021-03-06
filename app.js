// Node

class Node {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

// Trie

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      if (!(charToInsert in current.children)) {
        current.children[charToInsert] = new Node();
      }

      current = current.children[charToInsert];
    }

    current.isWordEnd = true;
  }

  contains(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in current.children)) {
        return false;
      }

      current = current.children[charToFind];
    }

    return current.isWordEnd;
  }

  startsWith(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];
      if (!(charToFind in current.children)) {
        return false;
      }

      current = current.children[charToFind];
    }

    return true;
  }

  remove(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in current.children)) {
        console.log(`The word '${word}' did not exist in the trie `);
        return;
      }

      current = current.children[charToFind];
    }
    current.isWordEnd = false;
  }
}

let tr = new Trie();
tr.insert("Sahil");
tr.insert("Aujla");
tr.insert("Sahgk");

// Daily Commit
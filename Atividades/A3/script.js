//adicionar e remover a classe active

const Modal = {
  open() {
    //adiciona o . para pegar a classe
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const Transaction = {
  all: [
    {
      description: "Luz",
      amount: -50000,
      date: "23/01/2021",
    },
    {
      description: "Website",
      amount: 500000,
      date: "24/01/2021",
    },
    {
      description: "Luz",
      amount: -20000,
      date: "26/01/2021",
    },
    {
      description: "APP",
      amount: 200000,
      date: "26/01/2021",
    },
  ],

  add(transaction) {
    Transaction.all.push(transaction);
    App.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1);
    App.reload();
  },

  //soma todas as entradas
  incomes() {
    let income = 0;
    Transaction.all.forEach((t) => {
      if (t.amount > 0) income += t.amount;
    });
    return income;
  },

  //soma todas as saídas
  expenses() {
    let expenses = 0;
    Transaction.all.forEach((t) => {
      if (t.amount < 0) expenses += t.amount;
    });
    return expenses;
  },

  total() {
    let total = 0;
    Transaction.all.forEach((t) => {
      total += t.amount;
    });

    return total;
    /*Outra forma:
    return Transaction.incomes() - Transaction.expenses() */
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  //recebe uma transaction e o local no document
  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
    tr.dataset.index = index

    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction, index) {
    const CSSClass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formartCurrency(transaction.amount);

    const html = ` 
        <td class="description">${transaction.description}</td>
        <td class="${CSSClass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação"></td> 
        `;
    return html;
  },

  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formartCurrency(
      Transaction.incomes()
    );
    document.getElementById("expenseDisplay").innerHTML = Utils.formartCurrency(
      Transaction.expenses()
    );
    document.getElementById("totalDisplay").innerHTML = Utils.formartCurrency(
      Transaction.total()
    );
  },

  clearTransaction() {
    DOM.transactionsContainer.innerHTML = "";
  },
};

const Utils = {
  formartCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    //o \D diz para achar tudo que não for número - expressão regular. O g diz que é global.
    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },

  formatAmount(value) {
    value = Number(value) * 100;

    return value;
  },

  formatDate(date) {
    const splittedDate = date.split("-");
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  },
};

const Form = {
  description: document.querySelector("input#description"),
  amount: document.querySelector("input#amount"),
  date: document.querySelector("input#date"),

  getValue() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    };
  },

  validateFields() {
    const { description, amount, date } = Form.getValue();
    if (
      description.trim() === "" ||
      amount.trim() === "" ||
      date.trim() === ""
    ) {
      throw new Error("Por favor, preencha todos os campos. ");
    }
  },

  formatValues() {
    let { description, amount, date } = Form.getValue();
    amount = Utils.formatAmount(amount);
    date = Utils.formatDate(date);

    return {
      description,
      amount,
      date,
    };
  },

  clearFields() {
    Form.description.value = "";
    Form.amount.value = "";
    Form.date.value = "";
  },

  submit(event) {
    event.preventDefault(); //tira o comportamento padrão de envio

    try {
      Form.validateFields();
      const transaction = Form.formatValues();
      Transaction.add(transaction);

      Form.clearFields();
      Modal.close();
    } catch (error) {
      alert(error.message);
    }
  },
};

const Storage = {
  get(){
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || []
  },

  set(transactions){
    localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions))
    //JSON.stringify pega o array e transforma em string.
  }
}

const App = {
  init() {
    Transaction.all.forEach((t, index) => {
      DOM.addTransaction(t, index);
    });
    /* ↑↑↓↓   Poderia ser também:
      Transaction.all.forEach(DOM.addTransaction(t, index));
    */

    DOM.updateBalance();
  },

  reload() {
    DOM.clearTransaction();
    App.init();
  },
};

App.init();

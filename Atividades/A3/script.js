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

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "24/01/2021",
  },
  {
    id: 3,
    description: "Luz",
    amount: -20000,
    date: "26/01/2021",
  },
  {
    id: 4,
    description: "APP",
    amount: 200000,
    date: "26/01/2021",
  },
];

const Transaction = {
  incomes() {
    //realiza a soma dos incomes
  },
  expenses() {
    //realiza a soma das saídas
  },
  total() {
    //é a entrada - a saída
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  //recebe uma transaction e o local no document
  addTransaction(transactions, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transactions);

    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction) {
    const CSSClass = transaction.amount > 0 ? "income" : "expense"

    const amount = Utils.formartCurrency(transaction.amount)

    const html = ` 
        <td class="description">${transaction.description}</td>
        <td class="${CSSClass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td> <img src="./assets/minus.svg" alt="Remover transação"> </td> 
        `;
    return html;
  },
};

const Utils = {
    formartCurrency(value){
        const signal = Number(value)
        //parei em 1:02
    }
    
}


transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction);
});


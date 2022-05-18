const afores = [
  {
    name: "banamex",
    interest: 0.5,
  },
  {
    name: "bancomer",
    interest: 0.6,
  },
  {
    name: "bancoazteca",
    interest: 0.7,
  },
  {
    name: "scotiabank",
    interest: 0.8,
  },
  {
    name: "hsbc",
    interest: 0.02,
  },
  {
    name: "banorte",
    interest: 0.15,
  },
  {
    name: "inbursa",
    interest: 0.22,
  },
];

function getInterestRate(type) {
  return afores.find((element) => element.name === type).interest;
}

function calculateMonthlyInterestRate(interest, mount) {
  return mount * interest;
}

function main() {
  const mount = parseInt(document.getElementById("mount").value);
  const type = document.getElementById("type").value;
  const interest = getInterestRate(type);
  const monthlyInterestRate = calculateMonthlyInterestRate(interest, mount);

  const divResult = document.getElementById("result");
  divResult.style.display = "block";
  divResult.innerHTML =
    "<h3>Resultado</h3>" +
    "<p>La tasa de interés mensual de este banco con dicho monto es de: $" +
    monthlyInterestRate +
    "</p>";
}

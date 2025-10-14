let medicines = [
  {
    name: "Paracetamol 500mg",
    formula: "Paracetamol",
    price: 120,
    company: "GlaxoSmithKline",
    expiry: "2026-03-15",
  },
  {
    name: "Amoxicillin 250mg",
    formula: "Amoxicillin Trihydrate",
    price: 220,
    company: "Pfizer",
    expiry: "2025-12-10",
  },
  {
    name: "Cough Syrup",
    formula: "Dextromethorphan + Guaifenesin + Menthol",
    price: 180,
    company: "Abbott Laboratories",
    expiry: "2025-06-30",
  },
  {
    name: "Ibuprofen 400mg",
    formula: "Ibuprofen",
    price: 150,
    company: "Sanofi",
    expiry: "2027-01-25",
  },
  {
    name: "Vitamin C Tablets",
    formula: "Ascorbic Acid",
    price: 90,
    company: "Bayer",
    expiry: "2026-09-01",
  },
  {
    name: "Cetirizine 10mg",
    formula: "Cetirizine Hydrochloride",
    price: 60,
    company: "Johnson & Johnson",
    expiry: "2025-11-20",
  },
  {
    name: "Azithromycin 500mg",
    formula: "Azithromycin Dihydrate",
    price: 350,
    company: "Novartis",
    expiry: "2026-02-10",
  },
  {
    name: "Omeprazole 20mg",
    formula: "Omeprazole",
    price: 140,
    company: "GlaxoSmithKline",
    expiry: "2027-04-18",
  },
  {
    name: "Metformin 500mg",
    formula: "Metformin Hydrochloride",
    price: 200,
    company: "Sun Pharma",
    expiry: "2026-07-09",
  },
];

let allMedicineStorage = JSON.parse(localStorage.getItem("allMedicines")) || [
  ...medicines,
];

const medicineCardPrint = (allCards) => {
  let rowCard = document.querySelector("#rowCard");
  rowCard.innerHTML = "";
  allCards.forEach((med, index) => {
    let name = med.name || med.newName;
    let formula = med.formula || med.newFormula;
    let price = med.price || med.newPrice;
    let company = med.company || med.newCompany;
    let expiryDate = med.expiry || med.newExpiryD;
    let cards = `
    <tr>
      <td><input class="form-control" type="text" value="${name}" readonly data-name="${index}"/></td>
      <td><input class="form-control" type="text" value="${formula}" readonly data-formula="${index}" /></td>
      <td><input class="form-control" type="text" value="${price}" readonly data-price="${index}" /></td>
      <td><input class="form-control" type="text" value="${company}" readonly data-company="${index}" /></td>
      <td><input class="form-control" type="text" value="${expiryDate}" readonly data-expiryDate="${index}" /></td>
      <td><button class="btn btn-success editBtn">Edit</button></td>
      <td><button class="btn btn-success submitBtn">Submit</button></td>
      <td class="closeX" style="font-weight:bold; cursor:pointer;" data-index="${index}">x</td>
    </tr>`;
    rowCard.insertAdjacentHTML("afterbegin", cards);
  });
};
medicineCardPrint(allMedicineStorage);

let saveCard = document.querySelector("#saveCard");
saveCard.addEventListener("click", function () {
  let medName = document.querySelector("#medName").value;
  let medFormula = document.querySelector("#medFormula").value;
  let medPrice = document.querySelector("#medPrice").value;
  let medCompany = document.querySelector("#medCompany").value;
  let expiryDate = document.querySelector("#expiryDate").value;

  let medicineDetailObj = {
    newName: medName,
    newFormula: medFormula,
    newPrice: medPrice,
    newCompany: medCompany,
    newExpiryD: expiryDate,
  };

  allMedicineStorage.push(medicineDetailObj);
  localStorage.setItem("allMedicines", JSON.stringify(allMedicineStorage));

  let close = document.querySelector(".close");
  close.click();
  medicineCardPrint(allMedicineStorage);
});



let closeX = document.querySelectorAll('.closeX');
closeX.forEach(btn => {
    btn.addEventListener('click', function(){
        this.parentElement.remove();
    });
});

let rowCard = document.querySelector('#rowCard');
rowCard.addEventListener('click', function(e){
    if(e.target.classList.contains('closeX')){
        let index = e.target.getAttribute('data-index');
        allMedicineStorage.splice(index, 1);
        localStorage.setItem('allMedicines', JSON.stringify(allMedicineStorage));
        medicineCardPrint(allMedicineStorage);
    }
});
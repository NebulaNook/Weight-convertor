const lbsinput = document.getElementById("lbsinput");
const grams = document.getElementById("gramsoutput");
const kg = document.getElementById("kgoutput");
const oz = document.getElementById("ozoutput");
const select = document.getElementById("select-value");
lbsinput.addEventListener("input", selectHandler);
select.addEventListener("change", selectHandler);
function selectHandler() {
     let lbs = lbsinput.value;
    if(select.value === 'Grams') {
        grams.innerHTML = lbs;
        kg.innerHTML = lbs / 1000;
        oz.innerHTML = lbs * 16;
    }else if(select.value === 'Kilograms') {
        grams.innerHTML = lbs * 1000;
        kg.innerHTML = lbs;
        oz.innerHTML = lbs * 16;
    }else if(select.value === 'Ounces') {
        grams.innerHTML = lbs * 100;
        kg.innerHTML = lbs * 16;
        oz.innerHTML = lbs;
    }
}
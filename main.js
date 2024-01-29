const list = document.querySelector("ul")

const incomes = companies.map(company => company.income)
const mostIncome = incomes.sort((a, b)=> b - a)[0]

companies.forEach((company, index)=> {

    const item = document.createElement("li")
    item.classList.add("item")
    list.append(item)

    const chart = document.createElement("div")
    chart.classList.add("chart")
    chart.style.height = `${(company.income / mostIncome) * 100}%`
    item.append(chart)
    const name = document.createElement("div")
    name.classList.add("name")
    name.textContent = company.name
    item.append(name)
    
})
const mainElement = document.getElementById("main")
mainElement.remove()

const newHeader = document.createElement("h1")

newHeader.setAttribute("id", 'victory')
newHeader.textContent = "Peyton is the champion"

document.body.append(newHeader)

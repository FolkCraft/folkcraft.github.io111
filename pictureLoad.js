
function createMosaic(elementID, imgList) {
    var divElement5 = document.getElementById(elementID)
    
    for (var i = 0; i < imgList.length; i++) {
        var spanElement = document.createElement("span")
        spanElement.className = "folio-types"
        spanElement.innerHTML = imgList[i].type
    
        var h3Element = document.createElement("h3")
        h3Element.className = "folio-title"
        h3Element.innerHTML = imgList[i].name
    
        var divElement = document.createElement("div")
        divElement.className = "item-text"
        divElement.appendChild(spanElement)
        divElement.appendChild(h3Element)
    
        var imgElement = document.createElement("img");
        imgElement.setAttribute('src', imgList[i].path);
        imgElement.setAttribute('alt', imgList[i].ID);
                            
        var aElement = document.createElement("a")
        aElement.setAttribute('href', "#")
        aElement.className = "overlay"
        aElement.appendChild(imgElement)
        aElement.appendChild(divElement)
    
        var divElement2 = document.createElement("div")
        divElement2.className = "item-wrap animate-this"
        divElement2.setAttribute('data-src', imgList[i].path)
        divElement2.setAttribute('data-sub-html', "#" + imgList[i].ID)
        divElement2.appendChild(aElement)
    
        var h4Element = document.createElement("h4")
        h4Element.innerHTML = imgList[i].name
    
        var pElement = document.createElement("p")
        pElement.innerHTML = imgList[i].description
    
        var divElement3 = document.createElement("div")
        divElement3.id = imgList[i].ID
        divElement3.className = "hide"
        divElement3.appendChild(h4Element)
        divElement3.appendChild(pElement)
    
        var divElement4 = document.createElement("div")
        divElement4.className = "brick folio-item"
        divElement4.appendChild(divElement2)
        divElement4.appendChild(divElement3)
    
        divElement5.appendChild(divElement4)
    }

}

createMosaic("folio-wrap1", uncukul)
createMosaic("folio-wrap2", kubachin)
createMosaic("folio-wrap3", gozatlin)
createMosaic("folio-wrap4", balhar)
createMosaic("folio-wrap5", sulevkent)
createMosaic("folio-wrap6", kaitag)
createMosaic("folio-wrap7", dagKover)
createMosaic("folio-wrap8", botlih)
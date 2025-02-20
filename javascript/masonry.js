function applyMasonry() {
    const container = document.querySelector('.testimonial-items');
    const items = Array.from(container.children);
  
    // Zorg dat de container relatief gepositioneerd is
    container.style.position = 'relative';
  
    // Stel de minimale breedte en de ruimte (gap) tussen items in (in pixels)
    const minColumnWidth = 285;
    const gap = 12;
  
    // Bereken het aantal kolommen op basis van de containerbreedte
    const containerWidth = container.clientWidth;
    const columnCount = Math.max(Math.floor(containerWidth / (minColumnWidth + gap)), 1);
  
    // Bereken de dynamische breedte van de kolommen zodat ze de container vullen
    const columnWidth = (containerWidth - (columnCount - 1) * gap) / columnCount;
  
    // Maak een array om de hoogte van elke kolom bij te houden
    const columnHeights = new Array(columnCount).fill(0);
  
    // Loop door elk item en positioneer deze
    items.forEach(item => {
        item.style.position = 'absolute';
        item.style.width = columnWidth + 'px';
    
        // Zoek de kolom met de minimale hoogte
        const minHeight = Math.min(...columnHeights);
        const columnIndex = columnHeights.indexOf(minHeight);
    
        // Bepaal de top- en left-positie
        const top = minHeight;
        const left = columnIndex * (columnWidth + gap);
    
        // Pas de posities toe
        item.style.top = top + 'px';
        item.style.left = left + 'px';
    
        // Update de kolomhoogte met de hoogte van dit item plus de gap
        columnHeights[columnIndex] += item.offsetHeight + gap;
    });
  
    // Stel de containerhoogte in zodat alle items zichtbaar blijven
    container.style.height = Math.max(...columnHeights) + 'px';
}
  
// Voer de masonry-layout uit zodra de pagina volledig geladen is
window.addEventListener('load', applyMasonry);
// Zorg ervoor dat de layout wordt aangepast bij het wijzigen van de venstergrootte
window.addEventListener('resize', applyMasonry);
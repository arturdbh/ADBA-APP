const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const servicios = [
    { id: 'dg', titulo: 'Diseño Gráfico', color1: '#00f2fe', color2: '#7000ff', resumen: 'Creamos piezas profesionales para tu marca, como logotipos, banners, volantes y todo tipo de material publicitario impreso y digital. Nuestro objetivo es que tu negocio se vea atractivo, profesional y comunique claramente al público.' },
    { id: 'id', titulo: 'Impresión Digital', color1: '#4facfe', color2: '#00f2fe', resumen: 'Podemos imprimir diseños en tamaño tabloide de alta calidad, ideal para volantes, tarjetas, menús, carteles, etc. Es una opción rápida y profesional para que tu negocio tenga material físico atractivo para promocionar tus productos o servicios.' },
    { id: 'uv', titulo: 'DTF UV', color1: '#7000ff', color2: '#ff0080', resumen: 'Es un método de impresión que permite transferir diseños a superficies rígidas como vidrio, acrílico, plástico, metal o madera. Podemos personalizar productos con alta calidad y durabilidad, ideales para promocionar tu marca o personalizar artículos promocionales.' },
    { id: 'dtft', titulo: 'DTF Textil', color1: '#ff0080', color2: '#7000ff', resumen: 'Nos permite estampar diseños a todo color sobre prendas como playeras, sudaderas, bolsas o uniformes. Ofrece gran calidad, resistencia y detalle, ideal para crear ropa personalizada.' },
    { id: 'var', titulo: 'Vinil Alto relieve (3D)', color1: '#f9d423', color2: '#ff4e50', resumen: 'Es un tipo de rotulación que crea letras, logotipos o diseños con efecto de volumen, haciendo que tu marca destaque visualmente. Se utiliza en letreros, paredes, escaparates o decoración de negocios, resalta principalmente en prendas de vestir.' },
    { id: 'ap', titulo: 'Artículos promocionales', color1: '#00ff88', color2: '#00f2fe', resumen: 'Productos personalizados con el logo o diseño de tu marca, como tazas, plumas, llaveros, libretas o bolsas. Para promocionar tu negocio, fortalecer tu marca y dejar una impresión duradera en tus clientes o en eventos y campañas publicitarias.' }
];

app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/servicios', (req, res) => res.json(servicios));

// Ruta para descargar el contacto (vCard)
app.get('/save-contact', (req, res) => {
    const vcard = "BEGIN:VCARD\nVERSION:3.0\nFN:ADBA Diseño\nTEL;TYPE=CELL:5583938608\nADR;TYPE=WORK:;;José T. Cuellar 79H;Col. Obrera;CDMX;06800;Mexico\nEND:VCARD";
    res.set({"Content-Type": "text/vcard", "Content-Disposition": "attachment; filename=\"ADBA_Diseno.vcf\""});
    res.send(vcard);
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(PORT, () => console.log(`ADBA Diseño activo en puerto ${PORT}`));
export function useDataPosts(){
    const posts = [
      { 
        id: 1,
        title: "Oportunity: O explorador marciano que superou todas as expectativas",
        content: `O rover Opportunity da NASA superou todas as expectativas, explorando a superfície marciana por mais de 14 anos. Suas descobertas revolucionaram nossa compreensão sobre o passado aquático de Marte. Através de imagens panorâmicas e análises minuciosas, o Opportunity revelou evidências de minerais formados em presença de água, indicando que Marte já abrigou um ambiente propício para a vida. A missão do Opportunity inspirou gerações de cientistas e entusiastas do espaço, e seu legado continua a impulsionar a exploração de Marte.`,
        author: "João Silva",
        date: "23-11-2023",
        categories: ["Exploração Espacial", "Marte"]
      },
      {
        id: 2,
        title: "Supernovas: Explosões Cósmicas que Forjam o Universo",
        content: `Supernovas são eventos cataclísmicos que marcam o fim da vida de estrelas massivas. Quando uma estrela gigante esgota seu combustível nuclear, seu núcleo colapsa e uma explosão colossal ocorre, liberando uma quantidade imensa de energia e elementos químicos pesados. Essas explosões são cruciais para a formação de novos sistemas estelares e planetas, e são responsáveis por dispersar elementos como carbono, oxigênio e ferro pelo universo.`,
        author: "Ana Oliveira",
        date: "24-11-2023",
        categories: ["Estrelas", "Astrofísica"]
      },
      { 
        id: 3,
        title: "Buracos Negros: Os Monstros do Universo",
        content: `Buracos negros são regiões do espaço com uma força gravitacional tão intensa que nada, nem mesmo a luz, pode escapar. Eles se formam a partir do colapso gravitacional de estrelas massivas. A teoria da relatividade geral de Einstein prevê a existência de buracos negros, e observações astronômicas recentes confirmaram sua existência em diversas galáxias.`,
        author: "Pedro Santos",
        date: "25-11-2023",
        categories: ["Buracos Negros", "Cosmologia"]
      },
      {
        id: 4,
        title: "A Busca por Vida Extraterrestre: Estamos Sozinhos no Universo?",
        content: `A busca por vida extraterrestre é uma das maiores perguntas da humanidade. Cientistas exploram o sistema solar e além, buscando sinais de vida em outros planetas. A descoberta de exoplanetas habitáveis aumentou a esperança de encontrarmos vida além da Terra.`,
        author: "Maria Fernandes",
        date: "26-11-2023",
        categories: ["Astrobiologia", "Exploração Espacial"]
      },
      {
        id: 5,
        title: "A Expansão do Universo: Um Mistério a Ser Desvendado",
        content: `O universo está em constante expansão, um fato confirmado por observações de galáxias distantes. A energia escura, uma forma de energia desconhecida, é a principal responsável por essa expansão acelerada. A natureza da energia escura é um dos maiores mistérios da cosmologia moderna.`,
        author: "Carlos Almeida",
        date: "27-11-2023",
        categories: ["Cosmologia"]
      },
      {
        id: 6,
        title: "As Primeiras Estrelas: Os Gigantes que Iluminaram o Universo",
        content: `As primeiras estrelas a se formarem no universo eram muito mais massivas e brilhantes do que as estrelas que vemos hoje. Elas desempenharam um papel fundamental na reionização do universo, tornando-o transparente à radiação.`,
        author: "Beatriz Souza",
        date: "28-11-2023",
        categories: ["Formação de Estrelas", "Cosmologia"]
      },
      {
        id: 7,
        title: "A Astronomia na Cultura: Do Mito à Ciência",
        content: `A astronomia tem fascinado a humanidade desde os tempos mais remotos. Diferentes culturas ao redor do mundo desenvolveram mitos e crenças sobre os corpos celestes, influenciando a arte, a religião e a filosofia. A astronomia moderna continua a inspirar a imaginação e a curiosidade de milhões de pessoas.`,
        author: "Roberto Pereira",
        date: "29-11-2023",
        categories: ["História da Ciência", "Cultura"]
      }
    ]
    return posts
  }
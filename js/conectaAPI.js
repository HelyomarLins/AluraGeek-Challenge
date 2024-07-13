
//Conecxão com a API de games
const API_URL = "http://localhost:3000/games"

async function games() {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error("Erro ao conectar com o servidor")
    return await response.json()
  } catch (error) {
    console.error(error)

    // Carrega os dados locais se houver um erro
    return carregarDadosLocais()
  }
}

//Metodo par carregad novo jogo 

async function novoGame(nome, preco, imagem) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, preco, imagem }),
    })
    if (!response.ok) throw new Error("Erro ao adicionar novo jogo")
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}


//Metodo para deletar jogo
async function excluirGame(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" })
    if (!response.ok) throw new Error("Erro ao excluir jogo")
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

//Metodo que carrega dados locais
async function carregarDadosLocais() {
  const response = await fetch("db.json")
  const data = await response.json()
  return data.games
}

//Export a API
export const conectaAPI = {
  games,
  novoGame,
  excluirGame,
}

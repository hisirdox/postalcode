function consulta_cep() {

  // salva o valor digitado do input com o id: cep
  var cep = document.getElementById("cep").value;

  // insere o valor na api de consulta
  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  // realiza a consulta pelo cep
  $.ajax({

    url: url,
    type: "GET",

    // caso a consulta tenha sucesso:
    success: function (response) {

      // configura o retorno da busca pelo cep em tela
      document.getElementById("response").innerHTML = 
      "Cep: " + response.cep + "<br>" +
      "Logradouro: " + response.logradouro + "<br>" +
      "Complemento: " + response.complemento + "<br>" +
      "Bairro: " + response.bairro + "<br>" +
      "Localidade: " + response.localidade + "<br>" +
      "UF: " + response.uf + "<br>" +
      "Unidade: " + response.unidade + "<br>" +
      "Ibge: " + response.ibge + "<br>" +
      "Gia: " + response.gia;

      // caso o cep nao exista, mostre essa mensagem
      if(response.cep == undefined) {
        document.getElementById("response").innerHTML = "Cep não encontrado"
      }

    }

  });

}

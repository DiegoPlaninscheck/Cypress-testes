describe("Realizar teste com a entidade endereco", () => {

    it("Selecionar todos os enderecos do banco", () => {
        cy.request("GET", "http://localhost:8085/endereco").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            expect(res.body).to.not.null;
        })
    })

    it("Verificar o CEP esta em todos os enderecos", () => {
        cy.request("GET", "http://localhost:8085/endereco").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            for (let i = 0; i < res.body.length; i++) {
                expect(res.body[i].cep).to.not.null;
            }
        })
    })

    it("Cadastrar um novo endereco", () => {
        let endereco = {
            "rua": "endereco teste",
            "numero": 111222333,
            "cidade": "cidade teste",
            "estado": "estado teste",
            "bairro": "bairro teste",
            "cep": 123123
        }

        cy.request("POST", "http://localhost:8085/endereco", endereco).as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            console.log(res.body);
            expect(res.body).to.have.property("cep", 123123)
        })
    })

    it("Editar um endereco", () => {
        let endereco = {
            "rua": "endereco teste",
            "numero": 111222333,
            "cidade": "cidade teste",
            "estado": "estado teste",
            "bairro": "bairro teste",
            "cep": 321
        }

        cy.request("PUT", "http://localhost:8085/endereco/2", endereco).as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            console.log(res.body);
            expect(res.body).to.have.property("cep", 321)
        })
    })
})
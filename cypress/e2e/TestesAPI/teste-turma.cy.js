describe("Realizar testes com a entidade turma", () => {

    // let qtdAluno;

    it("Selecionar todas as turmas do banco", () => {
        cy.request("GET", "http://localhost:8085/turma").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            // qtdAluno = res.body.length;
            expect(res.body).to.not.null;
        })
    })

    it("Escola em todas as turmas", () => {
        cy.request("GET", "http://localhost:8085/turma").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            for (let i = 0; i < res.body.length; i++) {
                expect(res.body[i].escola).to.not.null;
            }
        })
    })

    it("Cadastrar uma nova turma", () => {
        let turma = {
            "nome": "turma teste",
            "escola": {"id": 1},
        }

        cy.request("POST", "http://localhost:8085/turma", turma).as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            expect(res.body).to.have.property("nome", "turma teste")
        })
    })

    it("Editar uma turma", () => {
        let turma = {
            "nome": "turma editada",
            "escola": {"id": 1},
        }

        cy.request("PUT", "http://localhost:8085/turma/2", turma).as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            console.log(res.body);
            expect(res.body).to.have.property("nome", "turma editada")
        })
    })
})
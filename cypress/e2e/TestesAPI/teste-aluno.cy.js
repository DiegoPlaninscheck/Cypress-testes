describe("Realizar testes com a entidade aluno", () => {

    let qtdAluno;

    it("Selecionar todos os alunos do banco", () => {
        cy.request("GET", "http://localhost:8085/aluno").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            qtdAluno = res.body.length;
            expect(res.body).to.not.null;
        })
    })

    it("Email em todos os alunos", () => {
        cy.request("GET", "http://localhost:8085/teste/aluno").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            for (let i = 0; i < res.body.length; i++) {
                expect(res.body[i].email).to.not.null;
            }
        })
    })

    it("Cadastrar um novo aluno", () => {
        let aluno = {
            "nome": "Diego",
            "email": "diego@gmail.com",
            "telefone": "(47) 92345-6781",
            "endereco": { "id": 1 }
        }

        cy.request("POST", "http://localhost:8085/aluno", aluno).as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            expect(res.body).to.have.property("nome", "Diego")
        })
    })

    it("Editar um aluno", () => {
        let aluno = {
            "nome": "Diego",
            "email": "emailEditado@gmail.com",
            "telefone": "(47) 92345-6781",
            "endereco": { "id": 1 }
        }

        cy.request("PUT", "http://localhost:8085/aluno/2", aluno).as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            console.log(res.body);
            expect(res.body).to.have.property("email", "emailEditado@gmail.com")
        })
    })

    it("Deletar um aluno", () => {
        // cy.request("DELETE", "http://localhost:8085/aluno/" + qtdAluno).as("TodoRequest");
        // cy.get("@TodoRequest").then((res) => {
        //     expect(res.body).to.eq("Aluno deletado com sucesso!")
        // })

        // cy.request("GET", "http://localhost:8085/aluno/" + qtdAluno).as("TodoRequest");
        // cy.get("@TodoRequest").then((res) => {
        //     console.log(res);
        //     expect(res.body).to.eq("Não foi encontrado nenhum aluno com o ID informado")
        // })
    })
})
describe("Verificar se as disciplinas estam vinculadas aos professores cadastrados no banco", () => {
    it("Disciplinas vinculadas aos professores", () => {
        cy.request("GET", "http://localhost:8085/teste/professorDisciplina").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            for (let i = 0; i < res.body.length; i++) {
                console.log(res.body);
                expect(res.body[i].disciplinas).to.not.null;
            }
        })
    })
})
describe("Verificar se a escola tem endereco vinculado a ela no banco de dados", () => {
    it("Endereco de escola vinculado", () => {
        cy.request("GET", "http://localhost:8085/teste/escolaEndereco").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            for (let i = 0; i < res.body.length; i++) {
                expect(res.body[i].endereco).to.not.null;
            }
        })
    })
})
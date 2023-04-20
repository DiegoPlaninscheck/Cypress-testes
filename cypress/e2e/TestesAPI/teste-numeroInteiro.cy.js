describe("Verificar valor", () => {
    it("Valor igual a 10", () => {
        cy.request("GET", "http://localhost:8085/teste/numero").as("TodoRequest");
        cy.get("@TodoRequest").then((res) => {
            expect(res.body).to.eq(10);
        })
    })
})
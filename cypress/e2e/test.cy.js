describe("Hata Mesajlarının Testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // Sayfayı ziyaret et
  });

  it("Geçersiz e-posta hatası görüntülenmeli", () => {
    cy.get("#exampleEmail").type("gecersizemail"); // Geçersiz bir e-posta adresi gir
    cy.get(".invalid-feedback")
      .contains("Lütfen geçerli bir e-posta adresi girin")
      .should("be.visible");
  });

  it("Şifre uzunluğu hatası görüntülenmeli", () => {
    cy.get("#examplePassword").type("123");
    cy.get(".invalid-feedback")
      .contains("Şifre en az 4 karakter uzunluğunda olmalıdır")
      .should("be.visible");
  });

  it("Ad Soyad uzunluğu ", () => {
    cy.get("#exampleAdsoyad").type("Ad");
    cy.get(".invalid-feedback")
      .contains("Lütfen geçerli bir isim girin")
      .should("be.visible");
  });
});

describe("Buton Durumu Testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Buton devre dışı ", () => {
    cy.get(".Button").should("be.disabled");
  });

  it("Buton etkin", () => {
    cy.get("#exampleEmail").type("alicanS@workintech.com");
    cy.get("#examplePassword").type("1453acs");
    cy.get("#exampleAdsoyad").type("Ali Can");
    cy.get(".Button").should("not.be.disabled");
  });
});

describe("ID Ekrana Yaz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Form doldurulduktan sonra ID ekranda görülmeli", () => {
    cy.get("#exampleEmail").type("alicanS@workintech.com");
    cy.get("#examplePassword").type("1453acs");
    cy.get("#exampleAdsoyad").type("Ali Can");
    cy.get(".Button").click();
    cy.get("p").contains("AdSoyad").should("be.visible");
  });
});

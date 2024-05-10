import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./KayitOl.css";
import React, { useEffect, useState } from "react";

const initialForm = {
  email: "",
  password: "",
  AdSoyad: "",
};

const errorMessages = {
  email: "Lütfen geçerli bir e-posta adresi girin",
  password: "Şifre en az 4 karakter uzunluğunda olmalıdır",
  AdSoyad: "Lütfen geçerli bir isim girin",
};

export default function KayitOl() {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    AdSoyad: false,
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  useEffect(() => {
    if (
      validateEmail(form.email) &&
      form.password.trim().length >= 4 &&
      form.AdSoyad.trim().length >= 3
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      setErrors({ ...errors, email: !validateEmail(value) });
    }
    if (name === "password") {
      setErrors({ ...errors, password: value.trim().length < 4 });
    }
    if (name === "AdSoyad") {
      setErrors({ ...errors, AdSoyad: value.trim().length <= 3 });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
  };

  const [displayedAdSoyad, setDisplayedAdSoyad] = useState("");

  const handleClick = () => {
    const { AdSoyad } = form;
    setDisplayedAdSoyad((prevAdSoyad) =>
      prevAdSoyad
        ? `${prevAdSoyad} 
    ${AdSoyad}`
        : AdSoyad
    );
  };
  return (
    <div>
      <Form className="Form" onSubmit={handleSubmit}>
        <FormGroup className="FormGroup">
          <Label for="exampleAdsoyad" className="Label">
            Ad Soyad:
          </Label>
          <Input
            id="exampleAdsoyad"
            name="AdSoyad"
            placeholder="Adınız ve Soyadınız"
            type="text"
            className={`Input ${errors.AdSoyad ? "is-invalid" : ""}`}
            onChange={handleChange}
          />
          {errors.AdSoyad && (
            <div className="invalid-feedback">{errorMessages["AdSoyad"]}</div>
          )}
        </FormGroup>
        <FormGroup className="FormGroup">
          <Label for="exampleEmail" className="Label">
            Email:
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Mail Adresiniz"
            type="email"
            className={`Input ${errors.email ? "is-invalid" : ""}`}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errorMessages["email"]}</div>
          )}
        </FormGroup>
        <FormGroup className="FormGroup">
          <Label for="examplePassword" className="Label">
            Password:
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Şifreniz"
            type="password"
            className={`Input ${errors.password ? "is-invalid" : ""}`}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errorMessages["password"]}</div>
          )}
        </FormGroup>
        <Button
          color="primary"
          className="Button"
          type="submit"
          disabled={!isValid}
          onClick={handleClick}
        >
          Kayıt Ol
        </Button>
        {displayedAdSoyad && <p>AdSoyad: {displayedAdSoyad}</p>}
      </Form>
    </div>
  );
}

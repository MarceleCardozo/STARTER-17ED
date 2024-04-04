import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { Fragment } from "react/jsx-runtime";
import { Input } from "../components/styled/Input";
import { Button } from "../components/styled/Button";
import { Title } from "../components/styled/Title";

interface Products {
  id: string;
  name: string;
  price: string;
}

export function Home() {
  const [product, setProduct] = useState<Products[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  function addProduct(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const newProduct: Products = {
      id: uuid(),
      name,
      price,
    };

    setProduct((product) => [newProduct, ...product]);

    setName("");
    setPrice("");
  }

  function removeProduct(idProduct: string) {
    setProduct((currentValue) =>
      currentValue.filter((product) => product.id !== idProduct)
    );
  }

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Title>
          <h1>Produtos</h1>
        </Title>

        <form onSubmit={addProduct}>
          <Input
            id="nome-produto"
            type="text"
            name="nome-produto"
            placeholder="nome produto"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <Input
            id="preco-produto"
            type="text"
            name="preco-produto"
            placeholder="preço produto"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />

          <Button
            type="submit"
            width="200px"
            padding="20px"
            backgroundColor="black"
            color="white"
          >
            Cadastrar
          </Button>
        </form>
        <ul>
          {product.map((item) => (
            <li key={item.id} onClick={() => removeProduct(item.id)}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

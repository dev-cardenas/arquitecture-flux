import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCTO</th>
            <th>CANTIDAD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr key={2}>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-adidas-vs-advantage-clean-masculino/06/D13-8970-006/D13-8970-006_detalhe2.jpg?ims=326x"
                alt=""
              />
            </td>
            <td>
              <strong>Campiones muy buenos</strong>
              <span>USD 80,12</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
          </tr>
          <td>
            <strong>USD 160,24</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>USD 1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}

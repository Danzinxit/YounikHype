import React, { useState } from 'react';
import { ShoppingBag, Mail } from 'lucide-react';
import InputMask from 'react-input-mask';

interface FormData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  address: string;
  item: string;
  size: string;
  quantity: number;
}

function Formulario() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    address: '',
    item: 'Camiseta',
    size: 'M',
    quantity: 1
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          ...formData,
          toEmail: 'danielvieiraxbh30@gmail.com', // Certifique-se de que este e-mail é válido
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro no envio:', errorData);
        alert(`Erro ao enviar pedido: ${errorData.message || 'Erro desconhecido'}`);
        return;
      }

      // Pedido enviado com sucesso
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        address: '',
        item: 'Camiseta',
        size: 'M',
        quantity: 1,
      });
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      alert('Erro ao enviar pedido. Verifique sua conexão ou tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Loja de Roupas"
            />
          </div>
          <div className="p-8 w-full">
            <div className="flex items-center mb-6">
              <ShoppingBag className="h-6 w-6 text-indigo-600" />
              <h2 className="ml-2 text-2xl font-bold text-gray-900">Formulário de Compra</h2>
            </div>

            {success ? (
              <div className="text-center py-8">
                <Mail className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Pedido Enviado com Sucesso!</h3>
                <p className="text-gray-600">Obrigado pela sua compra. Entraremos em contato em breve.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Fazer Outro Pedido
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
                  <InputMask
                    mask="999.999.999-99"
                    type="text"
                    name="cpf"
                    id="cpf"
                    required
                    value={formData.cpf}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                  <InputMask
                    mask="(99) 99999-9999"
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Endereço de Entrega</label>
                  <textarea
                    name="address"
                    id="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="item" className="block text-sm font-medium text-gray-700">Produto</label>
                  <select
                    name="item"
                    id="item"
                    value={formData.item}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="Camiseta">Camiseta</option>
                    <option value="Calça Jeans">Calça Jeans</option>
                    <option value="Moletom">Moletom</option>
                    <option value="Vestido">Vestido</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700">Tamanho</label>
                  <select
                    name="size"
                    id="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="PP">PP</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantidade</label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {loading ? 'Enviando...' : 'Enviar Pedido'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
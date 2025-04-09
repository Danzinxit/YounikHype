import React, { useEffect } from 'react';
import { Truck, Medal, Ruler, Leaf, Clock, Lock, Award, ChevronDown, ChevronUp, Star, ShoppingCart, Package, Shirt } from 'lucide-react';
import azulImage from './images/azul.png';
import blackImage from './images/black.png';
import amareloImage from './images/amarelo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: false,  
    });
  }, []);

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<'black' | 'navy' | 'olive'>('black');

  const handleBuyNow = () => {
    alert("Produto adicionado ao carrinho! Redirecionando para o checkout...");
    // Aqui você pode redirecionar para uma página de checkout, por exemplo:
    // window.location.href = '/checkout';
  };

  const features = [
    { icon: Shirt, text: "Tecido premium 100% algodão orgânico" },
    { icon: Leaf, text: "Produção sustentável e eco-friendly" },
    { icon: Clock, text: "Durabilidade excepcional" },
    { icon: Package, text: "Entrega expressa para todo Brasil" }
  ];

  const testimonials = [
    { 
      name: "Pedro Silva",
      role: "Cliente Verificado",
      text: "A qualidade do tecido é incrível! Super confortável e o caimento é perfeito.",
      rating: 5
    },
    { 
      name: "Julia Santos",
      role: "Cliente Verificada",
      text: "Melhor camiseta que já comprei. O tecido é muito macio e não deforma após lavar.",
      rating: 5
    },
    { 
      name: "Carlos Costa",
      role: "Cliente Verificado",
      text: "Design minimalista e elegante. Uso tanto no casual quanto em ocasiões mais formais.",
      rating: 5
    }
  ];

  const faqs = [
    { 
      question: "Qual é o prazo de entrega?",
      answer: "Realizamos entregas para todo Brasil. O prazo médio é de 3-7 dias úteis, dependendo da sua localização." 
    },
    { 
      question: "Como funciona a política de trocas?",
      answer: "Oferecemos 30 dias para trocas e devoluções. A peça deve estar com a etiqueta e sem sinais de uso." 
    },
    { 
      question: "Como escolher o tamanho correto?",
      answer: "Disponibilizamos uma tabela de medidas detalhada em cada produto. Em caso de dúvidas, nossa equipe está pronta para ajudar." 
    },
    { 
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos todas as principais formas de pagamento: cartões de crédito, PIX, boleto bancário e PayPal." 
    }
  ];

  const specs = [
    "100% Algodão Orgânico",
    "Gramatura: 180g/m²",
    "Gola reforçada",
    "Costuras duplas",
    "Lavagem industrial anti-encolhimento",
    "Etiqueta sustentável"
  ];

  const sizes = ["P", "M", "G", "GG"];

  const getProductImage = () => {
    switch (selectedColor) {
      case 'navy':
        return azulImage;
      case 'olive':
        return amareloImage;
      default:
        return blackImage;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
    {/* Estilo personalizado da Scrollbar */}
    <style>{`
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #1a1a1a;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #E03D84, #900F99);
        border-radius: 6px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #c72a75, #7c0d85);
      }
      * {
        scrollbar-width: thin;
        scrollbar-color: #E03D84 #1a1a1a;
      }
    `}</style>
    
    <div className="min-h-screen bg-black text-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#E03D84] to-[#900F99] p-3">
        <div className="container mx-auto flex justify-center items-center gap-2">
          <Truck className="w-5 h-5" />
          <p className="font-medium text-sm sm:text-base">Frete Grátis para todo Brasil | Entrega em até 7 dias úteis</p>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="relative bg-black py-16 sm:py-24"
        data-aos="fade-up"
      >
        {/* Ajuste no z-index e pointer-events para evitar bloqueio de interação */}
        <div 
       
          data-aos="fade-in"
        ></div>
        <div 
          className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-[#900F99]/20 rounded-full">
              <p className="text-[#E03D84] font-medium text-sm">Coleção YouniK 2025</p>
            </div>
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#E03D84] to-[#900F99] text-transparent bg-clip-text leading-tight"
              data-aos="zoom-in"
            >
              Camiseta YouniK<br />Premium Cotton
            </h1>
            <p 
              className="text-lg text-gray-300 max-w-xl"
              data-aos="fade-up"
            >
              Confeccionada com algodão orgânico da mais alta qualidade, 
              nossa camiseta Essential oferece conforto incomparável e estilo atemporal.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <span className="text-2xl sm:text-3xl font-bold">R$ 129,90</span>
                <span className="text-lg text-gray-400 line-through">R$ 199,90</span>
                <span className="bg-[#14AB43] text-white px-3 py-1 rounded-full text-sm font-medium">
                  35% OFF
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 mb-2">Tamanho:</p>
                  <div className="flex gap-3">
                    {sizes.map(size => (
                      <button 
                        key={size}
                        className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-[#E03D84] text-white flex items-center justify-center transition"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Cor:</p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setSelectedColor('black')}
                      className={`w-12 h-12 rounded-full border-2 ${
                        selectedColor === 'black' 
                          ? 'border-[#E03D84]' 
                          : 'border-gray-600'
                      } bg-black`}
                    />
                    <button 
                      onClick={() => setSelectedColor('navy')}
                      className={`w-12 h-12 rounded-full border-2 ${
                        selectedColor === 'navy' 
                          ? 'border-[#E03D84]' 
                          : 'border-gray-600'
                      } bg-[#1B2B4D]`}
                    />
                    <button 
                      onClick={() => setSelectedColor('olive')}
                      className={`w-12 h-12 rounded-full border-2 ${
                        selectedColor === 'olive' 
                          ? 'border-[#E03D84]' 
                          : 'border-gray-600'
                      } bg-[#4B5320]`}
                    />
                  </div>
                </div>
              </div>
              <button 
                onClick={handleBuyNow} // Adiciona o evento de clique
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#14AB43] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C37] transition shadow-lg shadow-[#14AB43]/30"
              > <ShoppingCart className="w-5 h-5" />
                COMPRAR AGORA
              </button>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Lock className="text-[#900F99] mr-2" />
                <span className="text-sm">Compra segura</span>
              </div>
              <div className="flex items-center">
                <Award className="text-[#900F99] mr-2" />
                <span className="text-sm">Satisfação garantida</span>
              </div>
              <div className="flex items-center">
                <Package className="text-[#900F99] mr-2" />
                <span className="text-sm">Entrega expressa</span>
              </div>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E03D84] to-[#900F99] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            <img 
              src={getProductImage()}
              alt="Essential T-Shirt"
              className="relative z-10 mx-auto transform hover:scale-105 transition duration-500 max-w-[80%] rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-[#101010] py-24" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#E03D84] to-[#900F99] text-transparent bg-clip-text"
            data-aos="fade-down"
          >
            Características Premium
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 border border-[#E03D84] rounded-2xl bg-black hover:bg-gradient-to-br from-[#E03D84] to-[#900F99] transition duration-300 group"
                data-aos="zoom-in"
              >
                <feature.icon className="text-[#900F99] group-hover:text-white w-10 h-10 mb-6 mx-auto transition-colors" />
                <p className="text-center text-base">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-black py-24" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E03D84] to-[#900F99] text-transparent bg-clip-text">
                Detalhes do Produto
              </h2>
              <div className="grid gap-4">
                {specs.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 text-gray-300"
                    data-aos="fade-left"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#E03D84]" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative" data-aos="zoom-in">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E03D84] to-[#900F99] rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80"
                alt="Fabric Detail"
                className="relative rounded-3xl w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative bg-[#101010] py-24" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#E03D84] to-[#900F99] text-transparent bg-clip-text"
            data-aos="fade-down"
          >
            O que dizem nossos clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-black border border-[#E03D84] p-8 rounded-2xl hover:bg-gradient-to-br from-[#E03D84]/10 to-[#900F99]/10 transition duration-300"
                data-aos="zoom-in"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-center mb-6">{testimonial.text}</p>
                <div className="text-center">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* FAQ */}
      <div className="bg-black py-24" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#E03D84] to-[#900F99] text-transparent bg-clip-text"
            data-aos="fade-down"
          >
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-[#E03D84] rounded-xl overflow-hidden transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Adiciona um atraso para cada pergunta
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#E03D84]/10 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-[#900F99] flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="text-[#900F99] flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-[#101010] text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="relative bg-[#101010] py-24 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#E03D84] to-[#900F99] text-transparent bg-clip-text"
            data-aos="fade-down"
          >
            Não perca esta oferta exclusiva!
          </h2>
          <p 
            className="text-gray-300 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Aproveite o desconto especial e renove seu guarda-roupa com estilo e qualidade.
          </p>
          <button 
            className="flex items-center justify-center gap-2 mx-auto bg-[#14AB43] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C37] transition shadow-lg shadow-[#14AB43]/30"
            data-aos="zoom-in"
          >
            <ShoppingCart className="w-5 h-5" />
            COMPRAR AGORA
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-[#E13636] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Sobre</h3>
              <p className="text-gray-400 text-sm">
                Oferecemos roupas de alta qualidade com design atemporal e compromisso com a sustentabilidade.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <p className="text-gray-400 text-sm">
                Email: atendimento@exemplo.com<br />
                Tel: (11) 1234-5678
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Políticas</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
                <li>Trocas e Devoluções</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Pagamento</h3>
              <p className="text-gray-400 text-sm">
                Aceitamos todas as principais formas de pagamento com total segurança.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2024 Todos os Direitos Reservados YouniK Hype</p>
          </div>
        </div>
      </footer>
    </div>
  </div>);
}


export default App;
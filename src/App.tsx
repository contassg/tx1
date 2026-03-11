import { MessageCircle, Shield, Users, CheckCircle, Phone } from 'lucide-react';

function App() {
  const whatsappNumber = '5511965157358';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-10 h-10" />
            <h1 className="text-2xl font-bold">Central Sem Parar</h1>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 transition-colors px-6 py-2 rounded-full font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span>Contato</span>
          </button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Central Sem Parar
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Atendimento 24 Horas
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Selecione o serviço desejado e inicie o atendimento seguro pelo WhatsApp. Estamos sempre disponíveis para você.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 transition-all transform hover:scale-105 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg flex items-center space-x-3 mx-auto"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Clique para iniciar</span>
          </button>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Serviços Disponíveis
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Clique para iniciar
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={<Shield className="w-12 h-12 text-pink-600" />}
              title="Atendimento Seguro"
              description="Processos seguros e confiáveis 24 horas por dia"
              onClick={handleWhatsAppClick}
            />
            <ServiceCard
              icon={<Users className="w-12 h-12 text-pink-600" />}
              title="Suporte Disponível"
              description="Equipe especializada sempre pronta para atender"
              onClick={handleWhatsAppClick}
            />
            <ServiceCard
              icon={<CheckCircle className="w-12 h-12 text-pink-600" />}
              title="Sem Interrupção"
              description="Serviço contínuo e ininterrupto"
              onClick={handleWhatsAppClick}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Atendimento Sem Parar
          </h2>
          <h3 className="text-2xl font-semibold text-pink-700 mb-6">
            Sempre ao seu lado, 24/7
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Tenha um fluxo simples, rápido e seguro para solicitar suporte e serviços a qualquer hora.
          </p>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Nós acreditamos que um bom atendimento não tem horário. Nossa central funciona 24 horas por dia,
            todos os dias, para oferecer processos simples e seguros que tornem o dia a dia do cliente mais fácil
            e que estejam acessíveis exatamente quando você precisar.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-pink-600 hover:bg-pink-700 transition-all transform hover:scale-105 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg"
          >
            Solicitar Atendimento
          </button>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nossos Compromissos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CommitmentCard
              title="Disponibilidade 24/7"
              description="Sempre pronto para atender, sem intervalos, sem férias."
            />
            <CommitmentCard
              title="Qualidade"
              description="Atendimento de excelência em todos os momentos."
            />
            <CommitmentCard
              title="Confiança"
              description="Processos seguros e confiáveis para você."
            />
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Central Sem Parar</h3>
            <p className="text-pink-200 mb-6">
              Atendimento ininterrupto, 24 horas por dia
            </p>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-3 px-8 rounded-full inline-flex items-center space-x-2 mb-8"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fale Conosco no WhatsApp</span>
          </button>
          <p className="text-pink-200 text-sm">
            © 2024 Central Sem Parar. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function ServiceCard({ icon, title, description, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-pink-500"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-pink-600 font-semibold">
        <span>Acessar serviço</span>
        <MessageCircle className="w-5 h-5 ml-2" />
      </div>
    </div>
  );
}

interface CommitmentCardProps {
  title: string;
  description: string;
}

function CommitmentCard({ title, description }: CommitmentCardProps) {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-md p-8 border-l-4 border-pink-600">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;

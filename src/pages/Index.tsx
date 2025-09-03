import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mortgageAmount, setMortgageAmount] = useState([3000000]);
  const [mortgagePeriod, setMortgagePeriod] = useState([20]);
  const [mortgageRate, setMortgageRate] = useState([12]);
  const [selectedRooms, setSelectedRooms] = useState('');
  const [priceRange, setPriceRange] = useState([2000000, 8000000]);

  const calculateMonthlyPayment = () => {
    const P = mortgageAmount[0];
    const r = mortgageRate[0] / 100 / 12;
    const n = mortgagePeriod[0] * 12;
    const payment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(payment);
  };

  const apartments = [
    { id: 1, rooms: 1, area: 45, price: 3200000, floor: '3/12', image: '/img/04fe62b4-6e4e-4acb-9fca-9fdd980355c6.jpg' },
    { id: 2, rooms: 2, area: 65, price: 4800000, floor: '7/12', image: '/img/5ba937cd-1661-4711-bff6-3fab7883510e.jpg' },
    { id: 3, rooms: 3, area: 85, price: 6500000, floor: '5/12', image: '/img/f45f7a04-a16e-406a-912b-c5f6f5e7fe6a.jpg' },
    { id: 4, rooms: 2, area: 58, price: 4200000, floor: '2/12', image: '/img/04fe62b4-6e4e-4acb-9fca-9fdd980355c6.jpg' },
  ];

  const filteredApartments = apartments.filter(apt => {
    const roomsMatch = !selectedRooms || apt.rooms.toString() === selectedRooms;
    const priceMatch = apt.price >= priceRange[0] && apt.price <= priceRange[1];
    return roomsMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBE9BE] to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-[#FBE9BE]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-[#34495E]" />
              <span className="text-2xl font-bold text-[#34495E]">СтройДом</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#apartments" className="text-[#34495E] hover:text-[#2C3E50] transition-colors">Квартиры</a>
              <a href="#mortgage" className="text-[#34495E] hover:text-[#2C3E50] transition-colors">Ипотека</a>
              <a href="#about" className="text-[#34495E] hover:text-[#2C3E50] transition-colors">О компании</a>
              <a href="#contact" className="text-[#34495E] hover:text-[#2C3E50] transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#34495E] mb-6 animate-fade-in">
            Современные квартиры<br />
            <span className="text-[#2C3E50]">для жизни мечты</span>
          </h1>
          <p className="text-xl text-[#34495E]/80 mb-8 max-w-2xl mx-auto">
            Строим качественное жильё с 2010 года. Более 50 сданных объектов и тысячи довольных семей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#34495E] hover:bg-[#2C3E50] text-white rounded-full px-8">
              Подобрать квартиру
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#34495E] text-[#34495E] hover:bg-[#FBE9BE] rounded-full px-8">
              Рассчитать ипотеку
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-20">
        
        {/* Apartment Filter Section */}
        <section id="apartments" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#34495E] mb-4">Подобрать квартиру</h2>
            <p className="text-lg text-[#34495E]/80">Найдите идеальный дом для вашей семьи</p>
          </div>
          
          <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center text-[#34495E]">
                <Icon name="Filter" size={24} className="mr-2" />
                Фильтры поиска
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label className="text-[#34495E] font-medium">Количество комнат</Label>
                  <Select value={selectedRooms} onValueChange={setSelectedRooms}>
                    <SelectTrigger className="rounded-2xl border-[#FBE9BE] mt-2">
                      <SelectValue placeholder="Любое количество" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Любое количество</SelectItem>
                      <SelectItem value="1">1 комната</SelectItem>
                      <SelectItem value="2">2 комнаты</SelectItem>
                      <SelectItem value="3">3 комнаты</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-2">
                  <Label className="text-[#34495E] font-medium">
                    Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                  </Label>
                  <div className="mt-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={10000000}
                      min={1000000}
                      step={100000}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApartments.map((apartment) => (
              <Card key={apartment.id} className="group hover:shadow-xl transition-all duration-300 border-0 rounded-3xl overflow-hidden bg-white">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={apartment.image} 
                    alt={`${apartment.rooms}-комнатная квартира`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-[#FBE9BE] text-[#34495E] rounded-full">
                      {apartment.rooms}-комн
                    </Badge>
                    <span className="text-sm text-gray-500">{apartment.floor} этаж</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#34495E] mb-2">
                    {apartment.price.toLocaleString()} ₽
                  </h3>
                  <p className="text-gray-600 mb-4">{apartment.area} м²</p>
                  <Button className="w-full bg-[#34495E] hover:bg-[#2C3E50] text-white rounded-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mortgage Calculator */}
        <section id="mortgage" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#34495E] mb-4">Ипотечный калькулятор</h2>
            <p className="text-lg text-[#34495E]/80">Рассчитайте ежемесячный платеж</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center text-[#34495E]">
                  <Icon name="Calculator" size={24} className="mr-2" />
                  Параметры кредита
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-[#34495E] font-medium">
                    Сумма кредита: {mortgageAmount[0].toLocaleString()} ₽
                  </Label>
                  <Slider
                    value={mortgageAmount}
                    onValueChange={setMortgageAmount}
                    max={10000000}
                    min={500000}
                    step={100000}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-[#34495E] font-medium">
                    Срок кредита: {mortgagePeriod[0]} лет
                  </Label>
                  <Slider
                    value={mortgagePeriod}
                    onValueChange={setMortgagePeriod}
                    max={30}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-[#34495E] font-medium">
                    Процентная ставка: {mortgageRate[0]}%
                  </Label>
                  <Slider
                    value={mortgageRate}
                    onValueChange={setMortgageRate}
                    max={20}
                    min={5}
                    step={0.1}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#34495E] to-[#2C3E50] text-white rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" size={24} className="mr-2" />
                  Результат расчета
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {calculateMonthlyPayment().toLocaleString()} ₽
                  </div>
                  <div className="text-white/80">ежемесячный платеж</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Общая сумма:</span>
                    <span>{(calculateMonthlyPayment() * mortgagePeriod[0] * 12).toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Переплата:</span>
                    <span>{((calculateMonthlyPayment() * mortgagePeriod[0] * 12) - mortgageAmount[0]).toLocaleString()} ₽</span>
                  </div>
                </div>

                <Button className="w-full bg-[#FBE9BE] text-[#34495E] hover:bg-[#E8D5A3] rounded-full">
                  Подать заявку на ипотеку
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Company */}
        <section id="about" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#34495E] mb-4">О компании СтройДом</h2>
            <p className="text-lg text-[#34495E]/80 max-w-2xl mx-auto">
              Мы создаем комфортное жильё высокого качества уже более 13 лет
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'Building', title: '50+', desc: 'Сданных объектов' },
              { icon: 'Users', title: '3000+', desc: 'Довольных семей' },
              { icon: 'Award', title: '13 лет', desc: 'На рынке' },
              { icon: 'CheckCircle', title: '100%', desc: 'Качество' },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white rounded-3xl p-6">
                <Icon name={stat.icon} size={48} className="text-[#FBE9BE] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#34495E] mb-2">{stat.title}</h3>
                <p className="text-[#34495E]/80">{stat.desc}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#34495E] mb-6">Наши преимущества</h3>
              <div className="space-y-4">
                {[
                  'Собственное производство материалов',
                  'Гарантия качества на 10 лет',
                  'Индивидуальные планировки',
                  'Развитая инфраструктура',
                  'Экологически чистые материалы',
                  'Современные технологии строительства'
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span className="text-[#34495E]">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#34495E] mb-6">Сертификаты</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((cert) => (
                  <Card key={cert} className="aspect-square bg-gradient-to-br from-[#FBE9BE] to-[#E8D5A3] border-0 rounded-2xl flex items-center justify-center">
                    <Icon name="Award" size={48} className="text-[#34495E]/40" />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#34495E] mb-4">Контакты</h2>
            <p className="text-lg text-[#34495E]/80">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white rounded-3xl">
              <CardContent className="p-8 text-center">
                <Icon name="MapPin" size={48} className="text-[#FBE9BE] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#34495E] mb-3">Офис продаж</h3>
                <p className="text-[#34495E]/80">
                  г. Москва, ул. Строительная, 15<br />
                  ТЦ "Новый дом", 2 этаж
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white rounded-3xl">
              <CardContent className="p-8 text-center">
                <Icon name="Phone" size={48} className="text-[#FBE9BE] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#34495E] mb-3">Телефоны</h3>
                <p className="text-[#34495E]/80">
                  +7 (495) 123-45-67<br />
                  +7 (800) 987-65-43
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white rounded-3xl">
              <CardContent className="p-8 text-center">
                <Icon name="Clock" size={48} className="text-[#FBE9BE] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#34495E] mb-3">Режим работы</h3>
                <p className="text-[#34495E]/80">
                  Пн-Пт: 9:00 - 19:00<br />
                  Сб-Вс: 10:00 - 18:00
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 border-0 shadow-xl bg-gradient-to-r from-[#34495E] to-[#2C3E50] text-white rounded-3xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Получить консультацию</h3>
                <p className="text-white/80">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Input
                  placeholder="Ваше имя"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full"
                />
                <Input
                  placeholder="Телефон"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full"
                />
                <Button className="bg-[#FBE9BE] text-[#34495E] hover:bg-[#E8D5A3] rounded-full">
                  Получить консультацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#34495E] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Building2" size={32} />
            <span className="text-2xl font-bold">СтройДом</span>
          </div>
          <p className="text-white/80">
            © 2024 СтройДом. Все права защищены. Строим будущее вместе.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
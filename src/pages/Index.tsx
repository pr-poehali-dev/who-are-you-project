import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const cars = [
    {
      name: "Tesla Cybertruck",
      type: "Электрический пикап",
      speed: "250 км/ч",
      acceleration: "2.8 сек",
      power: "845 л.с.",
      image: "/img/047b8688-02e5-4f36-b6db-dcd19ad7a5dc.jpg",
    },
    {
      name: "BMW M5 CS",
      type: "Седан",
      speed: "305 км/ч",
      acceleration: "3.0 сек",
      power: "635 л.с.",
      image: "/img/047b8688-02e5-4f36-b6db-dcd19ad7a5dc.jpg",
    },
    {
      name: "McLaren 765LT",
      type: "Суперкар",
      speed: "330 км/ч",
      acceleration: "2.8 сек",
      power: "765 л.с.",
      image: "/img/047b8688-02e5-4f36-b6db-dcd19ad7a5dc.jpg",
    },
    {
      name: "Lamborghini Urus",
      type: "SUV",
      speed: "305 км/ч",
      acceleration: "3.6 сек",
      power: "650 л.с.",
      image: "/img/047b8688-02e5-4f36-b6db-dcd19ad7a5dc.jpg",
    },
  ];

  const tracks = [
    {
      name: "Нюрбургринг",
      type: "Кольцевая трасса",
      length: "20.8 км",
      difficulty: "Экстремальная",
      image: "/img/cb574f50-8e07-4766-b791-e947ed93dcae.jpg",
    },
    {
      name: "Автодром Сочи",
      type: "Формула 1",
      length: "5.8 км",
      difficulty: "Профессиональная",
      image: "/img/cb574f50-8e07-4766-b791-e947ed93dcae.jpg",
    },
    {
      name: "Дрифт-арена",
      type: "Дрифт трек",
      length: "1.2 км",
      difficulty: "Средняя",
      image: "/img/cb574f50-8e07-4766-b791-e947ed93dcae.jpg",
    },
  ];

  const raceTypes = [
    {
      title: "Дрифт",
      description: "Покажи мастерство управления в боковом скольжении",
      icon: "Gauge",
      color: "bg-racing-red",
    },
    {
      title: "Гонка",
      description: "Классические заезды по кольцевой трассе",
      icon: "Zap",
      color: "bg-racing-gold",
    },
    {
      title: "Спринт",
      description: "Кто быстрее доедет до финиша",
      icon: "Trophy",
      color: "bg-racing-black",
    },
  ];

  return (
    <div className="min-h-screen bg-racing-black text-racing-white font-['Roboto']">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-racing-black via-racing-gray to-racing-black overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center animate-slide-up">
          <h1 className="text-8xl font-bold font-['Oswald'] mb-6 text-racing-white">
            RACING
            <span className="text-racing-red"> SIMULATOR</span>
          </h1>
          <p className="text-2xl mb-8 text-racing-gray">
            Почувствуй адреналин настоящих гонок
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-racing-red hover:bg-racing-red/80 text-racing-white font-bold px-8 py-4 text-lg animate-pulse-red"
            >
              <Icon name="Play" className="mr-2" />
              НАЧАТЬ ГОНКУ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-racing-gold text-racing-gold hover:bg-racing-gold hover:text-racing-black font-bold px-8 py-4 text-lg"
            >
              <Icon name="Settings" className="mr-2" />
              НАСТРОЙКИ
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-racing-gold" />
        </div>
      </section>

      {/* Race Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-['Oswald'] text-center mb-4 text-racing-white">
            РЕЖИМЫ ГОНОК
          </h2>
          <p className="text-xl text-center text-racing-gray mb-16">
            Выбери свой стиль вождения
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {raceTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-racing-black/50 border-racing-gray hover:border-racing-gold transition-all duration-300 animate-zoom-in hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto w-16 h-16 ${type.color} rounded-full flex items-center justify-center mb-4`}
                  >
                    <Icon
                      name={type.icon}
                      size={32}
                      className="text-racing-white"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-racing-white font-['Oswald']">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-racing-gray">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-racing-red hover:bg-racing-red/80 text-racing-white font-bold w-full">
                    ИГРАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-20 px-4 bg-racing-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-['Oswald'] text-center mb-4 text-racing-white">
            ГАРАЖ
          </h2>
          <p className="text-xl text-center text-racing-gray mb-16">
            Выбери свою машину мечты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.map((car, index) => (
              <Card
                key={index}
                className="bg-racing-black/70 border-racing-gray hover:border-racing-gold transition-all duration-300 animate-zoom-in hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-racing-red text-racing-white">
                      {car.type}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-racing-white font-['Oswald']">
                    {car.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-racing-gray">
                    <div className="flex justify-between">
                      <span>Максимальная скорость:</span>
                      <span className="text-racing-gold font-bold">
                        {car.speed}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Разгон 0-100:</span>
                      <span className="text-racing-gold font-bold">
                        {car.acceleration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Мощность:</span>
                      <span className="text-racing-gold font-bold">
                        {car.power}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-racing-gold hover:bg-racing-gold/80 text-racing-black font-bold">
                    ВЫБРАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-['Oswald'] text-center mb-4 text-racing-white">
            ТРАССЫ
          </h2>
          <p className="text-xl text-center text-racing-gray mb-16">
            Испытай себя на легендарных трассах
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <Card
                key={index}
                className="bg-racing-black/70 border-racing-gray hover:border-racing-gold transition-all duration-300 animate-zoom-in hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden rounded-t-lg">
                  <img
                    src={track.image}
                    alt={track.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-racing-gold text-racing-black">
                      {track.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-racing-red text-racing-white">
                      {track.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-racing-white font-['Oswald']">
                    {track.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-racing-gray">Длина трассы:</span>
                    <span className="text-racing-gold font-bold">
                      {track.length}
                    </span>
                  </div>
                  <Button className="w-full bg-racing-red hover:bg-racing-red/80 text-racing-white font-bold">
                    ГОНКА
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-racing-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-['Oswald'] text-center mb-16 text-racing-white">
            СТАТИСТИКА
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-racing-red mb-2">0</div>
              <div className="text-racing-gray">Побед</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-racing-gold mb-2">0</div>
              <div className="text-racing-gray">Лучшее время</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-racing-red mb-2">0</div>
              <div className="text-racing-gray">Дрифт очков</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-racing-gold mb-2">0</div>
              <div className="text-racing-gray">Пройдено км</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-racing-gray">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-racing-gray">
            © 2024 Racing Simulator. Готов к гонкам?
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="ghost"
              className="text-racing-gold hover:text-racing-white"
            >
              <Icon name="Github" className="mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              className="text-racing-gold hover:text-racing-white"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Поддержка
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

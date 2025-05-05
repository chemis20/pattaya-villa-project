              <div className="text-center mb-6">
                <span className="text-2xl font-bold text-purple-600">от 12,907,600 ₽</span>
                <p className="text-gray-500">7% годовых в течение 10 лет</p>
              </div>
              
              <div class="space-y-4 mb-6">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Площадь</span>
                    <span class="font-medium">115 м²</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Спальни</span>
                    <span class="font-medium">2</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Ванные</span>
                    <span class="font-medium">3</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Бассейн</span>
                    <span class="font-medium">Частный</span>
                  </div>
                </div>

                <div class="space-y-3">
                  <a href="https://wa.me/79142055535" target="_blank" rel="noopener noreferrer" class="block w-full">
                    <Button class="w-full bg-purple-600 hover:bg-purple-700">Написать в What's App</Button>
                  </a>
                   
                  <div class="w-full">
                    <Button variant="outline" class="w-full mb-3" onClick={() => document.getElementById('call-form')?.classList.toggle('hidden')}> 
                      Позвонить
                    </Button>
                     
                    <div id="call-form" class="hidden p-4 bg-gray-50 rounded-lg mt-2">
                      <form onSubmit={handleSubmit} class="space-y-3">
                        <div>
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Иван Иванов" 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Номер телефона</Label>
                          <Input 
                            id="phone" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            placeholder="+7 (XXX) XXX-XX-XX" 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">Ваш город</Label>
                          <Input 
                            id="city" 
                            value={city} 
                            onChange={(e) => setCity(e.target.value)} 
                            placeholder="Москва" 
                            required 
                          />
                        </div>
                        <Button type="submit" class="w-full">Отправить</Button>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h3 class="font-medium text-purple-800 mb-2">Инвестиционная привлекательность</h3>
                  <p class="text-sm text-gray-600">Гарантированная доходность 7% на протяжении 10 лет. Компенсирует расходы по ипотеке (3%) и обеспечивает дополнительный доход.</p>
                </div>
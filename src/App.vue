<script setup>



import { ref, computed } from 'vue'



import heroImg from './assets/images/hero-training.jpg'



import teamImg from './assets/images/team-training.jpg'



import dashboardImg from './assets/images/dashboard-hands.jpg'







const groupLink = 'https://chat.whatsapp.com/JmIgDQS3xWjKZq0FSEa5rD'



const openFaq = ref(0)







const vendasCount = ref(10)



const simComissao = computed(() => vendasCount.value * 100)



const simBonus = computed(() => Math.floor(vendasCount.value / 5) * 200)



const simTotal = computed(() => simComissao.value + simBonus.value)







const benefits = [



  ['fa-solid fa-coins', 'R$100 por venda validada', 'Comissão definida para cada venda validada. Condicionada ao cumprimento das regras do programa.'],



  ['fa-solid fa-gift', 'R$200 de bÃÂ´nus a cada 5 vendas', 'BÃÂ´nus adicional como incentivo por desempenho, conforme regras vigentes do programa.'],



  ['fa-solid fa-graduation-cap', 'Treinamento completo', 'Aprenda o produto, o público, a abordagem comercial e como apresentar a solução sem prometer resultados.'],



  ['fa-solid fa-toolbox', 'Materiais e ferramentas', 'Scripts, mensagens, respostas para objeções, IA e tudo o que vocÃÂª precisa para começar.'],



  ['fa-solid fa-chart-line', 'Painel do vendedor', 'Acompanhe vendas, comissões, bÃÂ´nus, status e evolução da sua atuação em tempo real.'],



  ['fa-solid fa-headset', 'Suporte oficial', 'Grupo oficial para tirar dÃÂúvidas e receber orientações com profissionalismo.']



]







const modules = [



  ['01', 'Conheça o produto', 'Entenda o que é a Mentoria Full Engineer, para quem é e seus diferenciais reais.'],



  ['02', 'Encontre potenciais clientes', 'Aprenda a identificar pessoas com interesse real, sem spam e com ética profissional.'],



  ['03', 'Abordagem e conversão', 'Domine a comunicação, objeções mais comuns e como apresentar valor com clareza.'],



  ['04', 'Acompanhamento e fechamento', 'Organize conversas, faça follow-up adequado e entenda o processo de validação de vendas.']



]







const steps = [



  ['Cadastre-se', 'Faça seu cadastro no programa e receba as orientações para dar seus primeiros passos.'],



  ['Aprenda', 'Acesse o treinamento completo e entenda o produto, público e abordagem comercial.'],



  ['Divulgue', 'Utilize seu link individual, materiais, scripts e canais permitidos pelo programa.'],



  ['Venda e receba', 'Quando a venda for validada conforme as regras, vocÃÂª recebe a comissão correspondente.']



]







const faqs = [



  ['Quanto recebo por venda?', 'A comissão é de R$100 por venda validada, conforme as regras do programa.'],



  ['Como funciona o bÃÂ´nus?', 'A cada 5 vendas válidas, vocÃÂª recebe R$200 adicionais, conforme as regras vigentes do programa.'],



  ['Preciso ter seguidores?', 'Não. Seguidores podem ajudar, mas não são requisito. VocÃÂª pode utilizar networking, indicações e outros canais permitidos.'],



  ['Preciso ter experiÃÂªncia em vendas?', 'Não necessariamente. O programa oferece treinamento completo para iniciantes.'],



  ['Preciso entender programação?', 'Não. VocÃÂª precisa entender a proposta comercial da Mentoria Full Engineer e identificar pessoas interessadas.'],



  ['Quando recebo minha comissão?', 'ApÃÂ³s a validação da venda e cumprimento das regras do programa, o pagamento ocorre em até 24 horas, conforme condições estabelecidas.'],



  ['Existe garantia de ganhos?', 'Não. Os ganhos dependem da quantidade de vendas realizadas e validadas. O programa oferece treinamento, ferramentas e suporte, mas não garante vendas ou renda.'],



  ['Existe algum custo para participar?', 'O cadastro é gratuito. Consulte as regras do programa para eventuais informações sobre manutenção de acesso.']



]







const ideal = [



  'Gostaria de vender um produto já estruturado, sem precisar criá-lo do zero.',



  'Tem disposição para aprender e seguir um processo estruturado.',



  'Gosta de conversar, conectar pessoas e agregar valor.',



  'Quer desenvolver habilidades comerciais aplicáveis no longo prazo.',



  'Busca uma oportunidade baseada em desempenho, com regras claras.'



]







const notIdeal = [



  'Procura renda garantida ou dinheiro fácil.',



  'Pretende enviar spam ou fazer promessas falsas aos clientes.',



  'Não quer prospectar ou não tem disposição para aprender.',



  'Quer manipular potenciais clientes ao invés de informar com clareza.'



]



</script>







<template>



  <div>



    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#10233F]/95 text-white backdrop-blur">



      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">



        <a href="#top" class="flex items-center gap-2" aria-label="Voltar ao inÃÂ­cio">



          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4C95D] text-[#10233F] shadow-lg">



            <i class="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>



          </span>



          <span class="hidden text-sm font-extrabold tracking-tight sm:inline lg:text-base">



            Programa de Vendedores <span class="text-[#F4C95D]">Full Engineer</span>



          </span>



        </a>



        <nav class="hidden items-center gap-6 text-sm text-blue-100 lg:flex">



          <a href="#como-funciona" class="transition hover:text-[#F4C95D]">Como funciona</a>



          <a href="#comissÃ£o" class="transition hover:text-[#F4C95D]">Comissão</a>



          <a href="#treinamento" class="transition hover:text-[#F4C95D]">Treinamento</a>



          <a href="#dúvidas" class="transition hover:text-[#F4C95D]">DÃÂúvidas</a>



        </nav>



        <a :href="groupLink" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-sm font-extrabold text-[#10233F] shadow-lg shadow-yellow-900/20 transition hover:-translate-y-0.5 hover:brightness-105">



          Quero me cadastrar <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>



        </a>



      </div>



    </header>







    <main id="top">



      <section class="relative overflow-hidden bg-premium-gradient text-white">



        <div class="grid-paper absolute inset-0 opacity-40"></div>



        <div class="absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#F4C95D]/20 blur-3xl lg:h-96 lg:w-96"></div>



        <div class="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl"></div>



        <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">



          <div class="reveal">



            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4C95D]/50 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F4C95D] backdrop-blur">



              Programa de Vendedores Ã¢ÂÂ¢ Mentoria Full Engineer



            </div>



            <h1 class="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">



              Venda a Mentoria Full Engineer e <span class="text-[#F4C95D]">Receba R$100 por Venda Validada</span>



            </h1>



            <p class="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">



              VocÃÂª não precisa criar um produto, desenvolver uma plataforma ou dominar programação. Receba treinamento, materiais de divulgação, ferramentas e suporte para começar hoje.



            </p>



            <div class="mt-4 inline-flex items-center rounded-full border border-[#F4C95D]/40 bg-[#F4C95D]/10 px-4 py-1.5 text-sm font-bold text-[#F4C95D] backdrop-blur">



              + R$200 de bÃÂ´nus a cada 5 vendas, conforme as regras do programa



            </div>



            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">



              <a :href="groupLink" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-center font-extrabold text-[#10233F] shadow-xl shadow-yellow-900/20 transition hover:-translate-y-1 hover:brightness-105">



                Quero Conhecer o Programa de Vendedores <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>



              </a>



              <span class="text-center text-xs text-blue-200 sm:text-left">



                Cadastro sujeito ÃÂ s regras do programa. Comissão condicionada ÃÂ  venda validada.



              </span>



            </div>



            <div class="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-blue-100">



              <div class="flex items-center gap-2">



                <i class="fa-solid fa-shield-halved text-base text-[#F4C95D]" aria-hidden="true"></i>



                <span>Estrutura profissional e transparente</span>



              </div>



              <div class="flex items-center gap-2">



                <i class="fa-solid fa-clock text-base text-[#F4C95D]" aria-hidden="true"></i>



                <span>Pagamento em até 24h apÃÂ³s validação</span>



              </div>



              <div class="flex items-center gap-2">



                <i class="fa-solid fa-graduation-cap text-base text-[#F4C95D]" aria-hidden="true"></i>



                <span>Treinamento para iniciantes</span>



              </div>



            </div>



          </div>



          <div class="relative reveal [animation-delay:150ms]">



            <div class="absolute -inset-3 rounded-[2.5rem] bg-[#F4C95D]/20 blur-3xl"></div>



            <div class="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-2 shadow-2xl">



              <img :src="heroImg" alt="Equipe profissional em treinamento comercial" class="h-[280px] w-full rounded-[2rem] object-cover sm:h-[340px] lg:h-[420px]" loading="eager" />



              <div class="absolute bottom-5 left-5 right-5 grid gap-2.5 sm:grid-cols-3">



                <div class="rounded-2xl bg-white p-3.5 text-[#10233F] shadow-lg">



                  <i class="fa-solid fa-coins text-lg text-[#D4A72C]" aria-hidden="true"></i>



                  <p class="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Comissão</p>



                  <p class="text-xl font-black leading-none">R$ 100</p>



                  <p class="mt-0.5 text-[10px] text-slate-500">por venda validada</p>



                </div>



                <div class="rounded-2xl bg-[#10233F] p-3.5 text-white shadow-lg">



                  <i class="fa-solid fa-gift text-lg text-[#F4C95D]" aria-hidden="true"></i>



                  <p class="mt-2 text-[10px] font-semibold uppercase tracking-wider text-blue-200">BÃÂ´nus</p>



                  <p class="text-lg font-black leading-none">R$ 200</p>



                  <p class="mt-0.5 text-[10px] text-blue-200">a cada 5 vendas</p>



                </div>



                <div class="rounded-2xl bg-white p-3.5 text-[#10233F] shadow-lg">



                  <i class="fa-solid fa-chart-line text-lg text-blue-600" aria-hidden="true"></i>



                  <p class="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Estrutura</p>



                  <p class="text-sm font-black leading-tight">Treinamento + Ferramentas</p>



                  <p class="mt-0.5 text-[10px] text-slate-500">prontos para usar</p>



                </div>



              </div>



            </div>



          </div>



        </div>



      </section>







      <section id="oportunidade" class="bg-white px-4 py-20 lg:px-8 lg:py-28">



        <div class="mx-auto max-w-7xl">



          <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">



            <div>



              <span class="eyebrow">01 / Oportunidade</span>



              <h2 class="section-title">VocÃÂª não precisa criar o produto. Precisa encontrar quem precisa dele.</h2>



              <p class="section-copy">



                O vendedor entra em uma operação já estruturada: produto definido, materiais comerciais, treinamento, link individual, painel de acompanhamento e processo claro de validação de vendas.



              </p>



              <p class="mt-6 max-w-xl text-base leading-7 font-medium text-[#174EA6]">



                Reduza a complexidade. Foque em identificar e apresentar a solução para pessoas com interesse real.



              </p>



            </div>



            <div class="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">



              <img :src="teamImg" alt="Time colaborando em ambiente profissional de vendas" class="h-[320px] w-full object-cover lg:h-[420px]" loading="lazy" />



              <div class="absolute inset-0 bg-gradient-to-t from-[#10233F]/60 to-transparent"></div>



            </div>



          </div>



          <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">



            <article v-for="(item, i) in benefits" :key="item[1]" class="card group reveal" :style="`animation-delay: ${i * 50}ms`">



              <span class="icon-box">



                <i :class="item[0]" aria-hidden="true"></i>



              </span>



              <h3 class="mt-5 text-base font-extrabold leading-tight">{{ item[1] }}</h3>



              <p class="mt-2 text-sm leading-6 text-slate-600">{{ item[2] }}</p>



              <span class="mt-6 block text-xs font-bold uppercase tracking-wider text-[#174EA6]">



                0{{ i + 1 }} <i class="fa-solid fa-arrow-up-right-from-square ml-1 opacity-0 transition group-hover:opacity-100" aria-hidden="true"></i>



              </span>



            </article>



          </div>



        </div>



      </section>







      <section id="comissÃ£o" class="bg-[#F4F7FB] px-4 py-20 lg:px-8 lg:py-28">



        <div class="mx-auto max-w-7xl">



          <div class="mx-auto max-w-3xl text-center">



            <span class="eyebrow">02 / Comissão e BÃÂ´nus</span>



            <h2 class="section-title">Quanto vocÃÂª recebe?</h2>



            <p class="section-copy mx-auto">



              Transparente desde o inÃÂ­cio. Sem letras miúdas escondidas. Comissão clara e bÃÂ´nus progressivo por desempenho.



            </p>



          </div>



          <div class="mt-12 grid gap-6 md:grid-cols-2">



            <div class="rounded-[2rem] border-2 border-[#F4C95D]/30 bg-white p-8 shadow-lg lg:p-10">



              <div class="flex items-center justify-between">



                <h3 class="text-xl font-extrabold">Comissão</h3>



                <span class="rounded-full bg-[#F4C95D]/15 px-3 py-1 text-xs font-bold text-[#D4A72C]">Por venda validada</span>



              </div>



              <p class="mt-6 text-5xl font-black tracking-tight sm:text-6xl">R$100</p>



              <p class="mt-2 text-base text-slate-600">por cada venda validada conforme as regras do programa.</p>



            </div>



            <div class="rounded-[2rem] border border-slate-200 bg-[#10233F] p-8 text-white shadow-lg lg:p-10">



              <div class="flex items-center justify-between">



                <h3 class="text-xl font-extrabold">BÃÂ´nus</h3>



                <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-[#F4C95D]">Incentivo por desempenho</span>



              </div>



              <p class="mt-6 text-5xl font-black tracking-tight text-[#F4C95D] sm:text-6xl">R$200</p>



              <p class="mt-2 text-base text-blue-100">a cada 5 vendas válidas, conforme as regras vigentes do programa.</p>



            </div>



          </div>



          <div class="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">



            <div class="grid grid-cols-4 bg-slate-50 px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-600 sm:px-8">



              <span>Vendas</span>



              <span class="text-right">Comissão</span>



              <span class="text-right">BÃÂ´nus</span>



              <span class="text-right">Total</span>



            </div>



            <div class="divide-y divide-slate-100">



              <div v-for="[v, c, b, t] in [['1', 'R$100', 'R$0', 'R$100'], ['5', 'R$500', 'R$200', 'R$700'], ['10', 'R$1.000', 'R$400', 'R$1.400'], ['15', 'R$1.500', 'R$600', 'R$2.100'], ['20', 'R$2.000', 'R$800', 'R$2.800']]" :key="v" class="grid grid-cols-4 px-4 py-3 text-sm sm:px-8">



                <span class="font-bold">{{ v }}</span>



                <span class="text-right">{{ c }}</span>



                <span class="text-right">{{ b }}</span>



                <span class="text-right font-extrabold text-[#174EA6]">{{ t }}</span>



              </div>



            </div>



          </div>



          <p class="mt-4 text-center text-xs text-slate-500">



            Os valores acima são exemplos matemáticos. Não representam garantia de vendas ou de renda.



          </p>







          <div class="mt-12 mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">



            <h3 class="text-center text-lg font-extrabold">Simulador de Ganhos</h3>



            <p class="mt-1 text-center text-sm text-slate-600">Calcule matematicamente com base nas regras</p>



            <div class="mt-6 space-y-6">



              <div>



                <label class="mb-2 block text-sm font-bold">Quantas vendas vocÃÂª realizou?</label>



                <div class="flex items-center gap-4">



                  <input type="range" min="0" max="50" step="1" v-model="vendasCount" class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#F4C95D]" />



                  <div class="w-16 rounded-xl bg-slate-50 px-3 py-2 text-center font-extrabold">{{ vendasCount }}</div>



                </div>



              </div>



              <div class="grid gap-3 sm:grid-cols-3">



                <div class="rounded-2xl bg-slate-50 p-4 text-center">



                  <p class="text-xs font-semibold text-slate-500">Comissão</p>



                  <p class="mt-1 text-xl font-black">R$ {{ simComissao.toLocaleString('pt-BR') }}</p>



                </div>



                <div class="rounded-2xl bg-slate-50 p-4 text-center">



                  <p class="text-xs font-semibold text-slate-500">BÃÂ´nus</p>



                  <p class="mt-1 text-xl font-black text-[#D4A72C]">R$ {{ simBonus.toLocaleString('pt-BR') }}</p>



                </div>



                <div class="rounded-2xl bg-[#10233F] p-4 text-center text-white">



                  <p class="text-xs font-semibold text-blue-200">Total</p>



                  <p class="mt-1 text-xl font-black text-[#F4C95D]">R$ {{ simTotal.toLocaleString('pt-BR') }}</p>



                </div>



              </div>



            </div>



            <p class="mt-4 text-center text-xs text-slate-500">



              Simulação matemática. Não representa promessa ou garantia de resultado.



            </p>



          </div>



          <div class="mt-10 text-center">



            <a :href="groupLink" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-4 font-extrabold text-[#10233F] shadow-lg transition hover:-translate-y-1">



              Quero Começar a Vender <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>



            </a>



          </div>



        </div>



      </section>







      <section id="como-funciona" class="bg-[#10233F] px-4 py-20 text-white lg:px-8 lg:py-28">



        <div class="mx-auto max-w-7xl">



          <div class="max-w-3xl">



            <span class="eyebrow eyebrow-dark">03 / Como Funciona</span>



            <h2 class="section-title text-white">Do cadastro ÃÂ  primeira venda</h2>



            <p class="mt-5 text-lg leading-8 text-blue-100">



              Processo simples e estruturado para vocÃÂª saber exatamente o que precisa fazer em cada etapa.



            </p>



          </div>



          <div class="mt-12 grid gap-4 md:grid-cols-4">



            <div v-for="(step, i) in steps" :key="step[0]" class="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#F4C95D]/60 hover:bg-white/10">



              <span class="font-mono text-3xl font-black text-[#F4C95D]">{{ i + 1 }}</span>



              <h3 class="mt-8 text-lg font-extrabold">{{ step[0] }}</h3>



              <p class="mt-2 text-sm leading-6 text-blue-100/90">{{ step[1] }}</p>



              <i v-if="i < 3" class="fa-solid fa-arrow-right absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-[#F4C95D] md:block" aria-hidden="true"></i>



            </div>



          </div>



          <div class="mt-10 text-center">



            <a :href="groupLink" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full bg-[#F4C95D] px-7 py-4 font-extrabold text-[#10233F] shadow-xl transition hover:-translate-y-1 hover:bg-white">



              Quero Começar Agora <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>



            </a>



          </div>



        </div>



      </section>







      <section class="bg-white px-4 py-20 lg:px-8 lg:py-28">



        <div class="mx-auto max-w-7xl">



          <div class="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">



            <div>



              <span class="eyebrow">04 / O que vocÃÂª recebe</span>



              <h2 class="section-title">VocÃÂª recebe a estrutura para começar</h2>



              <p class="section-copy">



                Tudo organizado para que vocÃÂª foque no que realmente importa: encontrar pessoas com interesse na solução.



              </p>



              <div class="mt-8 grid gap-3 sm:grid-cols-2">



                <div v-for="text in ['Treinamento completo em vÃÂ­deo', 'Painel do vendedor', 'Materiais comerciais prontos', 'Scripts e respostas para objeções', 'Ferramentas e IA', 'Suporte oficial']" :key="text" class="flex items-start gap-3 text-sm leading-6 text-slate-700">



                  <i class="fa-solid fa-circle-check mt-0.5 text-base text-[#174EA6]" aria-hidden="true"></i>



                  <span>{{ text }}</span>



                </div>



              </div>



              <div class="mt-8 rounded-2xl border-l-4 border-[#F4C95D] bg-[#F4F7FB] p-5">



                <p class="text-sm leading-7 font-medium text-[#10233F]">



                  "Eu não preciso criar um produto, desenvolver uma plataforma ou dominar programação. A estrutura está pronta para eu me concentrar em encontrar quem precisa da solução."



                </p>



              </div>



            </div>



            <div class="relative">



              <div class="absolute -inset-4 rounded-[2.5rem] bg-blue-900/10 blur-2xl"></div>



              <div class="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#10233F] p-2 shadow-xl">



                <img :src="dashboardImg" alt="Painel de vendas sendo utilizado em laptop" class="h-[360px] w-full rounded-[2rem] object-cover opacity-90 lg:h-[440px]" loading="lazy" />



                <div class="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#10233F]/95 p-5 text-white backdrop-blur">



                  <div class="flex items-center justify-between">



                    <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Painel do Vendedor</span>



                    <span class="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-300">Em tempo real</span>



                  </div>



                  <div class="mt-5 flex items-end justify-between gap-2">



                    <div v-for="n in [40, 55, 48, 72, 65, 88]" :key="n" class="flex-1 rounded-t-xl bg-gradient-to-t from-[#174EA6] to-[#F4C95D] transition-all" :style="{ height: n + 'px' }"></div>



                  </div>



                </div>



              </div>



            </div>



          </div>



        </div>



      </section>







      <section id="treinamento" class="bg-[#F4F7FB] px-4 py-20 lg:px-8 lg:py-28">



        <div class="mx-auto max-w-7xl">



          <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">



            <div class="max-w-2xl">



              <span class="eyebrow">05 / Treinamento</span>



              <h2 class="section-title">VocÃÂª não precisa saber vender antes de começar</h2>



              <p class="section-copy">



                Aprenda na prática, com mÃÂ³dulos estruturados para te levar da teoria ÃÂ  ação com segurança e profissionalismo.



              </p>



            </div>



            <a :href="groupLink" target="_blank" rel="noopener" class="link-cta">



              Quero Receber o Treinamento <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>



            </a>



          </div>



          <div class="mt-12 grid gap-4 md:grid-cols-2">



            <article v-for="module in modules" :key="module[0]" class="module-card group">



              <span class="font-mono text-sm font-bold text-[#D4A72C]">{{ module[0] }}</span>



              <div>



                <h3 class="text-xl font-extrabold">{{ module[1] }}</h3>



                <p class="mt-2 text-sm leading-6 text-slate-600">{{ module[2] }}</p>



              </div>



              <i class="fa-solid fa-arrow-up-right-dots ml-auto self-start text-2xl text-blue-200 transition group-hover:text-[#174EA6]" aria-hidden="true"></i>



            </article>



          </div>



          <div class="mt-12 grid gap-6 md:grid-cols-2">



            <div class="rounded-[2rem] bg-white p-8 shadow-sm">



              <h3 class="text-xl font-extrabold">Perfil Ideal</h3>



              <ul class="mt-6 space-y-3">



                <li v-for="item in ideal" :key="item" class="flex items-start gap-3 text-sm leading-6 text-slate-700">



                  <i class="fa-solid fa-circle-check mt-0.5 text-base text-[#174EA6]" aria-hidden="true"></i>



                  <span>{{ item }}</span>



                </li>



              </ul>



            </div>



            <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">



              <h3 class="text-xl font-extrabold">Não é para quem...</h3>



              <ul class="mt-6 space-y-3">



                <li v-for="item in notIdeal" :key="item" class="flex items-start gap-3 text-sm leading-6 text-slate-600">



                  <i class="fa-solid fa-circle-xmark mt-0.5 text-base text-slate-400" aria-hidden="true"></i>



                  <span>{{ item }}</span>



                </li>



              </ul>



              <p class="mt-6 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">



                Priorizamos qualidade de atuação e ética profissional, não apenas quantidade de cadastros.



              </p>



            </div>



          </div>



          <div class="mt-10 text-center">



            <a :href="groupLink" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-4 font-extrabold text-[#10233F] shadow-lg transition hover:-translate-y-1">



              Quero Participar do Programa <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>



            </a>



          </div>



        </div>



      </section>







      <section id="dúvidas" class="bg-white px-4 py-20 lg:px-8 lg:py-28">



        <div class="mx-auto max-w-4xl">



          <div class="text-center">



            <span class="eyebrow">06 / Perguntas Frequentes</span>



            <h2 class="section-title">Tire suas dÃÂúvidas antes de começar</h2>



            <p class="section-copy mx-auto">



              Clareza e transparÃÂªncia em todas as informações. Caso não encontre sua dúvida, pergunte no grupo oficial.



            </p>



          </div>



          <div class="mt-10 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white shadow-sm">



            <div v-for="(faq, i) in faqs" :key="faq[0]" class="px-6 sm:px-8">



              <button class="flex w-full items-center justify-between gap-5 py-5 text-left font-bold transition" :aria-expanded="openFaq === i" @click="openFaq = openFaq === i ? -1 : i">



                <span class="text-base sm:text-lg">{{ faq[0] }}</span>



                <i class="fa-solid fa-plus text-lg text-[#174EA6] transition-transform duration-200" :class="openFaq === i ? 'rotate-45' : ''" aria-hidden="true"></i>



              </button>



              <div v-if="openFaq === i" class="max-w-3xl pb-6 text-sm leading-7 text-slate-600">



                {{ faq[1] }}



              </div>



            </div>



          </div>



          <div class="mt-12 rounded-[2rem] bg-premium-gradient p-8 text-center text-white shadow-xl lg:p-10">



            <h2 class="text-3xl font-black tracking-tight sm:text-4xl">Pronto para começar?</h2>



            <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">



              Faça seu cadastro, conheça o treinamento, receba acesso ÃÂ s ferramentas e comece a divulgar de forma profissional.



            </p>



            <a :href="groupLink" target="_blank" rel="noopener" class="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#F4C95D] px-8 py-4 font-extrabold text-[#10233F] shadow-xl transition hover:-translate-y-1 hover:bg-white">



              Quero Me Cadastrar Como Vendedor <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>



            </a>



            <p class="mt-4 text-xs text-blue-200">



              Cadastro sujeito ÃÂ s regras e critérios do programa. Comissão condicionada ÃÂ  venda validada.



            </p>



          </div>



        </div>



      </section>



    </main>







    <footer class="bg-[#0B192D] px-4 py-12 text-blue-200 lg:px-8">



      <div class="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">



        <div>



          <div class="flex items-center gap-3 text-white">



            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4C95D] text-[#10233F] shadow-lg">



              <i class="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>



            </span>



            <span class="text-lg font-extrabold lg:text-xl">



              Programa de Vendedores <span class="text-[#F4C95D]">Full Engineer</span>



            </span>



          </div>



          <p class="mt-4 max-w-sm text-sm leading-6 text-blue-200/90">



            Programa de vendedores da Mentoria Full Engineer. Oportunidade com regras claras, treinamento e foco em atuação profissional.



          </p>



        </div>



        <div class="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">



          <a href="#como-funciona" class="transition hover:text-[#F4C95D]">Como funciona</a>



          <a href="#comissÃ£o" class="transition hover:text-[#F4C95D]">Comissão e BÃÂ´nus</a>



          <a href="#treinamento" class="transition hover:text-[#F4C95D]">Treinamento</a>



          <a href="#dúvidas" class="transition hover:text-[#F4C95D]">Perguntas Frequentes</a>



          <a :href="groupLink" target="_blank" rel="noopener" class="transition hover:text-[#F4C95D]">Entrar no Grupo</a>



        </div>



      </div>



      <div class="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">



        <p class="text-xs leading-6 text-blue-300/70">



          A participação no programa não garante ganhos fixos ou resultados especÃÂ­ficos. As comissões e bÃÂ´nus dependem da realização e validação de vendas, conforme as regras apresentadas no programa.



        </p>



        <p class="mt-2 text-xs text-blue-300/60">© 2026 - Todos os direitos reservados.</p>



      </div>



    </footer>



  </div>



</template>







<style scoped>



.eyebrow {



  @apply inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#174EA6];



}



.eyebrow-dark {



  @apply bg-white/10 text-[#F4C95D] backdrop-blur;



}



.section-title {



  @apply mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl;



}



.section-copy {



  @apply mt-5 text-base leading-8 text-slate-600;



}



.card {



  @apply rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-premium;



}



.icon-box {



  @apply flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-[#174EA6] transition group-hover:bg-[#174EA6] group-hover:text-white;



}



.module-card {



  @apply flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#F4C95D] hover:shadow-lg;



}



.link-cta {



  @apply inline-flex items-center gap-2 font-bold text-[#174EA6] transition hover:gap-3;



}



</style>




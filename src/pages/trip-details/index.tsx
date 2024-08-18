import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog} from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";

export function TripDetailsPage(){
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  
  function openCreateActivityModal(){
    setIsCreateActivityModalOpen(true)
  }
  
  function closeCreateActivityModal(){
    setIsCreateActivityModalOpen(false)
  }
  
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400"/>
          <span className="text-zinc-100">Belo Horizonte, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <div className='w-px h-6 bg-zinc-800' />

          <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-zinc-700'>Alterar local/data
            <Settings2 className='size-5' />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-lime-400'>
              <Plus className='size-5' />
              Cadastrar Atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="sapce-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300"/>
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300"/>
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200"> https://www.airbnb.com.br/rooms/129378912389123978741278943</a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200"> https://www.airbnb.com.br/rooms/129378912389123978741278943</a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
              </div>
            </div>
            <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex gap-2 items-center hover:bg-zinc-700 w-full justify-center'><Plus className='size-5' /> Cadastrar novo link
            </button>
          </div>
          <div className='w-full h-px bg-zinc-800' />
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Gabriel Victor</span>
                  <span className="block text-sm text-zinc-400 truncate"> gabriel.victor22@icloud.com</span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Anna Chandra</span>
                  <span className="block text-sm text-zinc-400 truncate"> anna.chandra08@gmail.com</span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
              </div>
            </div>
            <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex gap-2 items-center hover:bg-zinc-700 w-full justify-center'><UserCog className='size-5' /> Gerenciar convidados
            </button>
          </div>
        </div>
      </main>
    
      {isCreateActivityModalOpen && (
        <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  )
}
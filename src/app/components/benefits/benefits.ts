import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  standalone: false,
  templateUrl: './benefits.html',
  styleUrl: './benefits.css'
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      id: 1,
      icon: '💰',
      title: 'Precios Competitivos',
      description: 'Acceso a cientos de juegos con descuentos exclusivos para miembros premium.'
    },
    {
      id: 2,
      icon: '👥',
      title: 'Comunidad Activa',
      description: 'Únete a millones de jugadores, participa en torneos y conecta con amigos.'
    },
    {
      id: 3,
      icon: '🏆',
      title: 'Logros y Recompensas',
      description: 'Desbloquea logros, gana puntos y obtén premios especiales.'
    },
    {
      id: 4,
      icon: '🔒',
      title: 'Seguridad Garantizada',
      description: 'Protección de datos con encriptación de última generación.'
    }
  ];
}

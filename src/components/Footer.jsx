import React from 'react'
import { face , logoInstagram , logotwitter } from "../assets";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#001C38]">
    <p className="font-Abril font-normal text-[32px] ml-2 mt-2 leading-6 text-white" >Logo</p>
    <div className="mt-16 mb-5">
      <p className="ont-poppins  font-semibold text-sm leading-5 text-center text-white mb-4">Entreprise et équipe</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Sécurité</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Presse</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Carrières</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Statut du service</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Relations avec les investisseurs</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Feuille de route de la mission</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Affiliés et partenaires</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Centre d’aide</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Avis</p>

      {/* 2nd pr */}

      <p className="ont-poppins  font-semibold text-sm leading-5 text-center text-white mb-4">Produits Wise</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Transfert d'argent international</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Compte Wise</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Carte de débit internationale</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Carte de paiement de voyage</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Transfert de montant important</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Actifs</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Plateforme Wise</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Wise Business</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Carte de débit professionnelle</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Paiements de masse</p>

      {/* 3 pr */}

      <p className="ont-poppins  font-semibold text-sm leading-5 text-center text-white mb-4">Ressources</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Actualités et blog</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Convertisseur de devises</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Codes BIC/SWIFT</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Codes IBAN</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Alertes de taux</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Comparer les taux de change</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Générateur de factures</p>
      <p className="font-poppins font-medium text-xs leading-4 text-center text-white text-opacity-50" >Calculateurs pro</p>

    </div>
    <div className="m-auto mb-6 flex w-[182.34px] justify-between">
      <img src={face} alt="" />
      <img src={logoInstagram} alt="" />
      <img src={logotwitter} alt="" />
    </div>
  </div>
  )
}

export default Footer
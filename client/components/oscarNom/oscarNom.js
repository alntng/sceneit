import React, {useState} from 'react'

import BestPicture from './bestPicture'
import LeadActor from './leadActor'
import LeadActress from './leadActress'
import SupportingActor from './supportingActor'
import SupportingAcress from './supportingActress'
import BestDirector from './bestDirector'
import AnimFeat from './animFeat'
import ShortAnimFeat from './shortAnimFeat'
import AdaptedScreenplay from './adaptedScreenplay'
import OriginalScreenPlay from './originalScreenplay'
import Cinematography from './cinematography'
import DocFeature from './docFeature'
import DocShortSubject from './docShortSubject'
import LiveActionShort from './liveActionShort'
import InternationalFeatures from './internationalFeature'
import FilmEditing from './filmEditing'
import SoundEditing from './soundEditing'
import SoundMixing from './soundMixing'
import ProductionDesign from './productionDesign'
import OriginalScore from './originalScore'
import OriginalSong from './originalSong'
import MakeupHair from './makeupHair'
import CostumeDesign from './costumeDesign'
import VisualEffects from './visualEffects'

import Sidebar from './sideBar'

import emailjs from 'emailjs-com'
import {EMAILJSUERID} from '../../../secrets'

export default function oscarNom() {
  const [predictions, setPredictions] = useState(' ')

  const sendEmail = e => {
    let service_id = 'default_service'
    let template_id = 'template_2DqzUt9d'
    e.preventDefault()

    let categories = Object.keys(sessionStorage)
    let choices = []

    categories.forEach(category => {
      choices.push(`${category}: ${sessionStorage[category]}`)
    })

    setPredictions(choices.join('<br/>'))
    console.log(predictions)

    console.log(e.target)
    // window.emailjs.sendForm(service_id, template_id, e.target, EMAILJSUERID)
  }

  return (
    <div id="outerNominations">
      <Sidebar
        pageWrapId="innerNominations"
        outerContainerId="outerNominations"
      />

      <div id="innerNominations" className="oscarNoms">
        <h1>Put in your Oscar Predictons</h1>
        <BestPicture />
        <LeadActor />
        <LeadActress />
        <SupportingActor />
        <SupportingAcress />
        <BestDirector />
        <AnimFeat />
        <ShortAnimFeat />
        <AdaptedScreenplay />
        <OriginalScreenPlay />
        <Cinematography />
        <DocFeature />
        <DocShortSubject />
        <LiveActionShort />
        <InternationalFeatures />
        <FilmEditing />
        <SoundEditing />
        <SoundMixing />
        <ProductionDesign />
        <OriginalScore />
        <OriginalSong />
        <MakeupHair />
        <CostumeDesign />
        <VisualEffects />
        <form className="oscarNoms" onSubmit={sendEmail}>
          <label>email</label>
          <textarea type="hidden" value={predictions} name="prediction" />
          <input type="text" name="userEmail" />
          <button type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

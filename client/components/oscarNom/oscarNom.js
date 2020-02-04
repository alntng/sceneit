import React, {useState, useEffect} from 'react'
import {Form, Button} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

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
import {EMAILJSUSERID} from '../../../secrets'

export default function oscarNom() {
  const [predictions, setPredictions] = useState(' ')
  const history = useHistory()

  useEffect(() => {
    console.log('Guesses', predictions)
  })

  const sendEmail = async e => {
    let service_id = 'default_service'
    let template_id = 'template_2DqzUt9d'
    e.preventDefault()

    let categories = Object.keys(sessionStorage)
    let choices = []

    await categories.forEach(category => {
      choices.push(`${category}: ${sessionStorage[category]}`)
    })

    // setPredictions(choices.join('<br/>'))

    //!function for testing
    await setPredictions(choices.join('\n'))

    history.push(`/oscarPredictions/thanksForPlaying`)
    // window.emailjs.sendForm(service_id, template_id, e.target, EMAILJSUSERID)
  }

  return (
    <div id="outerNominations" style={{paddingBottom: '10rem'}}>
      <Sidebar
        pageWrapId="innerNominations"
        outerContainerId="outerNominations"
      />

      <div id="innerNominations" className="oscarNoms">
        <h1>
          <b>
            <em>Place Your Predictions Before February 9th!</em>
          </b>
        </h1>
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
        <Form className="oscarNoms" onSubmit={sendEmail}>
          {/* <label>Email your Selections!</label> */}
          <textarea
            style={{display: 'none'}}
            value={predictions}
            name="prediction"
          />
          <Form.Field>
            <input
              type="text"
              name="userEmail"
              placeholder="example@email.com"
            />
            <br />
            <br />
            <Button type="submit">Email your Predictions</Button>
          </Form.Field>
        </Form>
      </div>
    </div>
  )
}

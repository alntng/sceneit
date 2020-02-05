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
import {categories, capitalize} from './utilities'

export default function oscarNom() {
  const [predictions, setPredictions] = useState({})
  const [userEmail, setUserEmail] = useState('')

  const history = useHistory()

  useEffect(() => {
    console.log('Guesses', predictions)
  })

  let emailArray = []
  let emailBody = ''

  const sendEmail = () => {
    let service_id = 'default_service'
    let template_id = 'template_2DqzUt9d'

    const capitalizedCategories = categories.map(category =>
      capitalize(category)
    )

    capitalizedCategories.forEach(category =>
      emailArray.push([`${category} : ${predictions[category]}`])
    )

    let templateParams = {
      prediction: emailArray.join('<br/>'),
      userEmail
    }

    // '<br/>' for emailjs dynamic variables
    // e.target.value = emailArray.join('<br/>')
    // console.log(e.target.value, 'the event')

    // '\n' email testing prurposes
    // emailBody = emailArray.join('\n')
    // console.log(emailBody)

    window.emailjs.send(service_id, template_id, templateParams, EMAILJSUSERID)
    history.push(`/oscarPredictions/thanksForPlaying`)
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
            <em>Place Your Predictions Before February 9th</em>
          </b>
        </h1>
        <BestPicture
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <LeadActor predictions={predictions} setPredictions={setPredictions} />
        <LeadActress
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <SupportingActor
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <SupportingAcress
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <BestDirector
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <AnimFeat predictions={predictions} setPredictions={setPredictions} />
        <ShortAnimFeat
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <AdaptedScreenplay
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <OriginalScreenPlay
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <Cinematography
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <DocFeature predictions={predictions} setPredictions={setPredictions} />
        <DocShortSubject
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <LiveActionShort
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <InternationalFeatures
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <FilmEditing
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <SoundEditing
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <SoundMixing
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <ProductionDesign
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <OriginalScore
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <OriginalSong
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <MakeupHair predictions={predictions} setPredictions={setPredictions} />
        <CostumeDesign
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <VisualEffects
          predictions={predictions}
          setPredictions={setPredictions}
        />
        <Form className="oscarNoms" onSubmit={sendEmail}>
          <textarea
            style={{display: 'none'}}
            value={emailBody}
            name="prediction"
          />
          <Form.Field>
            <input
              type="text"
              name="userEmail"
              placeholder="example@email.com"
              onChange={e => setUserEmail(e.target.value)}
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

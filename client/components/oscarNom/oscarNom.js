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

export default function oscarNom() {
  const [visible, setVisible] = useState({visible: false})

  return (
    <div id="outerNominations" className="oscarNoms">
      <Sidebar
        pageWrapId="innerNominations"
        outerContainerId="outerNominations"
      />
      <div id="innerNominations">
        <h1>Put in your Oscar Predictons</h1>

        <BestPicture />
        <LeadActor />
        <LeadActress />
        <SupportingActor />
        <SupportingAcress />
        <BestDirector />
        <AnimFeat id="animated-feature" />
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
      </div>
    </div>
  )
}

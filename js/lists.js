// Yi-Chia Chen

var projects = [
    {
        'name':'[taste] Taste Typicality (Andrew, Monica, Derek, Laurel, Brian)',
        'acronym':'taste'
    },
    {
        'name':'[aniAes] Aesthetics and Animacy (Frank)',
        'acronym':'aniAes',
        'next':[
            'head/left foot -- M(x/y position) from 2 repeats x 80 Ss = 160 trials x 20 walkers -- correlate with ratings of aesthetics/animacy/residuals',
            'PB&R if rejected from Cognition'
        ]
    },
    {
        'name':'[emoAes] Elegant Movements (Frank)',
        'acronym':'emoAes',
        'next':[
            'check aesEmo additional analysis and organize summary',
            'Run aesEmo analysis in experiment 1',
            'modeling for both experiments',
            'run naturalness experiment',
            'write this in the paper -- Amodal effect from emotion recognition vs. perceptual effect from perceptual cues for emotions',
            'read more about facial attractiveness and emotion: happy > neutral > sad > angry?',
            'future experiments: AQ, Relationship with "dynamic/movement" in artworks (e.g., Mondrian, Pollock, dot techniques, aesthetics in art vs. in daily life)'
        ]
    },
    {
        'name':'[PsyONN] (Felix, Jaime)',
        'acronym':'PsyONN',
        'next':[
            'IRB',
            'learn pyTorch',
            'collaborators? Shuhao pattern extraction from waveform, Kellman perceptual learning'
        ]
    },
    {
        'name':'[autTaste] Autistic Traits & Taste Study (Moriah)',
        'acronym':'autTaste',
        'next':[
            'exploratory analysis: Connect words chosen with Wordnet for semantic analysis',
            'Consider ImageNet and described scene databases Nick is using in future experiments',
            'What attributes are in this image (checkboxes) to classify'
        ]
    },
    {
        'name':'[conservTaste] Conservative Aesthetic Taste (Moriah)',
        'acronym':'conservTaste',
        'next':[
            'cross-cultural differences -- Tsai, J. L. (2007) Ideal affect: Cultural causes and behavioral consequences. Perspectives on Psychological Science 19:242–59.',
            'work memory',
            'IQ test 16 questions (fluid intelligence)',
            'metaphor approximate creatitivity (crystalized intelligence)'
        ]
    },
    {
        'name':'[socAvo] Social Avoidance (Clara & Shuhao)',
        'acronym':'socAvo',
        'next':[
            'potential conclusion -- spontaneous/implicit stimuli encoding bias',
            'Examined factors like duration, acceleration, distance from target, later movement toward destination'
        ]
    },
    {
        'name':'[socAvoModel] Social Avoidance Modeling (Clara & Shuhao)',
        'acronym':'socAvoModel',
        'next':[
            'program new experiment with Shuhao',
            "Direction: Other's attention effects on other social entities are represented in a third party as social force (not physical force); Idea: Detecting social avoidance involves matching the social force distribution from observed attention of first party to the observed movements of the second party, We can test what is the distribution among orientation and distance, strengh of the force, whether such social force follow physical law or other norm (different law? no law? different parameters/constants?)"
        ]
    },
    {
        'name':'[typScene] Modeling Typical Scene for Aesthetics (Shuhao & Xiaoyang)',
        'acronym':'typScene',
        'next':[
            'meet as a group to discuss next analysis',
            'GAIN network: pass raw image, perturbation, Aesthetic judgment'
        ]
    },
    {
        'name':'[selfRec] Self-non-biological-motion Recognition (Akila)',
        'acronym':'selfRec',
        'next':['program new experiment by the end of March']
    },
    {
        'name':'[presntPrinc] Presentation Principle (Idan Blank?)',
        'acronym':'presntPrinc',
        'next':['present ideas in lab meeting','ask Idan for collaboration']
    },
    {
        'name':'[NRSA] NIH NRSA by 8/8 or 12/8; BRAIN letter 7/10 | 8/10',
        'acronym':'NRSA',
        'deadline':'8/8 or 12/8 (BRAIN letter of intent 7/10 | 8/10)',
        'descriptions':[
            "<a target='_blank' href='https://grants.nih.gov/grants/guide/pa-files/PA-21-048.html'>info</a>",
            "<a target='_blank' href='https://grants.nih.gov/grants/guide/notice-files/NOT-EY-21-001.html'>Diversity info</a>",
            "<a target='_blank' href='https://grants.nih.gov/grants/guide/rfa-files/RFA-MH-20-620.html'>BRAIN Initiative version</a>"
        ]
    },
    {
        'name':'[K99] by 10/6 or 2022.2/10 or 2022.6/8',
        'acronym':'K99',
        'deadline':'10/6 or 2022.2/10 or 2022.6/8',
        'descriptions':["<a target='_blank' href='https://grants.nih.gov/grants/guide/rfa-files/RFA-NS-19-043.html'>info</a>"]
    },
    {
        'name':'[K01] by 10/12',
        'acronym':'K01',
        'deadline':'10/12',
        'descriptions':[
            "<a target='_blank' href='https://grants.nih.gov/grants/guide/pa-files/PA-20-190.html'>info 1</a>",
            "<a target='_blank' href='https://grants.nih.gov/grants/guide/pa-files/PA-20-191.html'>info 2</a>",
        ]
    },
    {
        'name':'[lab] method paper presentation for next quarter',
        'acronym':'lab'
    }
];

var next_actions = [
    {
        'name':'[selfRec] read papers',
        'acronym':'selfRec',
        'deadline':'next monday (3/15)'
    },
    {
        'name':'[emoAes] Add more analyses (see today.txt on desktop)',
        'acronym':'emoAes'
    },
    {
        'name':'[taste] Write NHB',
        'acronym':'taste'
    },
    {
        'name':'check NIH/NSF grant call deadline',
        'acronym':'others'
    },
    {
        'name':"[NRSA] plan out <a target='_blank' href='https://grants.nih.gov/grants/policy/nihgps/HTML5/section_11/11.2.2_eligibility.htm'>NRSA</a> timeline",
        'acronym':'NRSA'
    },
    {
        'name':'[aniAes] Rewrite the paper for Cognition',
        'acronym':'aniAes',
        'descriptions':[
            'rewrite the introduction as Watching people -> impression -> statics -> dynamics',
            'Add more about everyday experience (add more dance studies in the intro)',
            'Add the systematic factors determining apporachable'
        ]
    },
    {
        'name':"Write letter of intent for <a target='_blank' href='https://tdg.ucla.edu/UCLA-innovation-fund'>Innovation Fund 2021</a>",
        'acronym':'others',
        'deadline':'5/1'
    },
    {
        'name':'[lab] decide on papers to present for method meeting',
        'acronym':'lab'
    },
    {
        'name':'[presntPrinc] ideas generation',
        'acronym':'presntPrinc'
    },
    {
        'name':"[typScene] look at Xiaoyang's result files",
        'acronym':'typScene'
    },
    {
        'name': '[NRSA] Taylor Webb ask for NRSA materials',
        'acronym':'NRSA'
    },
    {
        'name': '[fMRIAes] analyze the second sample',
        'acronym':'fMRIAes',
        'descriptions':[
            'Find out how Sasha did her working memory correlation with complexity preference',
            'Measure stimuli complexity and individual complexity preference scores',
            'add a column to latest taste typicality sheet and Send it to Monica, Taylor, and Anna'
        ]
    },
    {
        'name':'file tax return',
        'acronym':'others',
        'deadline':'4/15'
    }
];

var waiting_for = [
    {
        'name':'[autTaste] Run between-subject experiment next quarter',
        'acronym':'autTaste'
    },
    {
        'name':'[conservTaste] Moriah is analyzing data now',
        'acronym':'conservTaste'
    },
    {
        'name':"[socAvo] Program between-subject experiment after getting Shuhao's parameters",
        'acronym':'socAvo',
        'descriptions':[
            'Multiple choice experiment:',
            'testing orientation/position x red/blue',
            'maybe add other filler trials to make sure subjects are still engaging socially?',
            '7 options forced choice (tick marks appeared around the disappeared blue guy)',
            'Position question -- tip position along the moving direction',
            'multiple trials',
            'video mirrored and inverted to create multiple versions',
            'reduce playing time for blue triangle',
            'Record accuracy and errors'
        ]
    },
    {
        'name':'[socAvoModel] Meet for desiging wider range experiment for next quarter',
        'acronym':'socAvoModel'
    },
    {
        'name':'[typScene] Xiaoyang is working on the analysis',
        'acronym':'typScene'
    },
    {
        'name':'[typMem] Taste Typicality predicts Memory Typicality?',
        'acronym':'typMem',
        'descriptions':[
            'Ask Qi about collaboration',
            "whether taste typicality is related to people's typicality in image memory:",
            'tell us (a) unusual encoding leads to unusual taste, or (b) unusual taste leads to unusual encoding',
            'some images afford more routes (various cues) for encoding, and may lead to both high memorability and low consensus in aesthetics'
        ]
    }
];

var someday = [
    {
        'name':'[socInt] Representation of Social Interaction (Tianmin)',
        'acronym':'socInt',
        'descriptions': [
            "Think about what aspect of memory should be tested",
            "Tianmin Shu's stimuli (Can we yoked the conditions?)",
            "postively-valenced/cooperative social interaction -> memory?"
        ]
    },
    {
        'name':'[inAut] Inward Bias & Autistic Traits (Clara & Sophie)',
        'acronym':'inAut',
        'descriptions':[
            'Need to add gaze deflection in and revise the code for Prolific and run',
            'Sophie: human subject training & add to IRB'
        ]
    },
    {
        'name':'[BMModel] Modeling Biological Motion',
        'acronym':'BMModel',
        'descriptions':[
            'based on Ryali_etal_2020_faceTypicalityAttractiveness',
            'Model for point-light walkers just like the 90/50-axis model in faces',
            'Statistical typicality of the point-light walkers predict aesthetic experience?',
            'Trait judgments and identify features (create database, manipulate it, etc.)'
        ]
    },
    {
        'name':'program online timer management app',
        'acronym':'others'
    },
    {
        'name':'[socConv] Social Cues for Conversations',
        'acronym':'socConv',
        'descriptions':["social cues that signal the enjoyment of conversation and its effect on the content, length of coversation, enjoyment of your partner, rating of the partner's inattention"]
    },
    {
        'name':'[FrmOcc] Framing vs. partially occluded effect in preference for scene',
        'acronym':'FrmOcc',
        'descriptions':[
            'How does framing influence preference of scenes?',
            'Is it really about framing as in taking photo or creating pictures (artistic knowledge)?',
            'Or is it about avoidance of occlusion/out of view (evolutionary explanations)?',
            'Manipulation -- framing vs. partial occlusion, where the visible part of the image is identical'
        ]
    }
];
// Yi-Chia Chen
// speicail characters in tasks: ':', ';'

var projects = [
    {
        'name':'Taste Typicality (Andrew, Monica, Derek, Laurel, Brian)'
    },
    {
        'name':'Aesthetics and Animacy (Frank)',
        'next':[
            'head/left foot -- M(x/y position) from 2 repeats x 80 Ss = 160 trials x 20 walkers -- correlate with ratings of aesthetics/animacy/residuals',
            'PB&R if rejected from Cognition'
        ]
    },
    {
        'name':'Elegant Movements (Frank)',
        'next':[
            'check aesEmo additional analysis and organize summary',
            'Run aesEmo analysis in experiment 1',
            'modeling for both experiments',
            'run naturalness experiment',
            'write this in the paper -- Amodal effect from emotion recognition vs. perceptual effect from perceptual cues for emotions',
            'read more about facial attractiveness and emotion: happy > neutral > sad > angry?; ',
            'future experiments: AQ; Relationship with "dynamic/movement" in artworks (e.g., Mondrian, Pollock, dot techniques; aesthetics in art vs. in daily life)'
        ]
    },
    {
        'name':'PsyOMN (Felix, Jaime)',
        'next':[
            'schedule another meeting for pilot experiments',
            'IRB',
            'learn pyTorch',
            'potential collaborators: Shuhao pattern extraction from waveform; Kellman perceptual learning'
        ]
    },
    {
        'name':'Autistic Traits & Taste Study (Moriah)',
        'next':[
            'exploratory analysis: Connect words chosen with Wordnet for semantic analysis; Consider ImageNet and described scene databases Nick is using in future experiments; What attributes are in this image (checkboxes) to classify'
        ]
    },
    {
        'name':'Conservative Aesthetic Taste (Moriah)',
        'next':[
            'cross-cultural differences: Tsai, J. L. (2007) Ideal affect: Cultural causes and behavioral consequences. Perspectives on Psychological Science 19:242–59.',
            'work memory',
            'IQ test 16 questions (fluid intelligence)',
            'metaphor approximate creatitivity (crystalized intelligence)'
        ]
    },
    {
        'name':'Social Avoidance (Clara & Shuhao)',
        'next':[
            'potential conclusion -- spontaneous/implicit stimuli encoding bias',
            'Examined factors like duration, acceleration, distance from target, later movement toward destination'
        ]
    },
    {
        'name':'Social Avoidance Modeling (Clara & Shuhao)',
        'next':[
            'program new experiment with Shuhao',
            "Direction: Other's attention effects on other social entities are represented in a third party as social force (not physical force); Idea: Detecting social avoidance involves matching the social force distribution from observed attention of first party to the observed movements of the second party; We can test what is the distribution among orientation and distance, strengh of the force, whether such social force follow physical law or other norm (different law? no law? different parameters/constants?)"
        ]
    },
    {
        'name':'Modeling Typical Scene for Aesthetics (Shuhao & Xiaoyang)',
        'next':[
            'meet as a group to discuss next analysis',
            'GAIN network: pass raw image; perturbation; Aesthetic judgment'
        ]
    },
    {
        'name':'Self-non-biological-motion Recognition (Akila)',
        'next':['program new experiment']
    },
    {
        'name':'Presentation Principle (Idan Blank?)',
        'next':['present ideas in lab meeting','ask Idan for collaboration']
    },
    {
        'name':'NIH NRSA (by 8/8)',
        'next':['Taylor Webb ask for NRSA materials']
    },
    {
        'name':'K99'
    },
    {
        'name':'method paper presentation for next quarter'
    }
];

var next_actions = [
    {'name':'[selfRec] think about new design'},
    {'name':'[emoAes] Add more analyses (see today.txt on desktop)'},
    {'name':'[tasteTypicality] Write NHB'},
    {'name':'check K99 deadlines and timeout for both general and disability types'},
    {'name':'check NIH/NSF grant call deadline'},
    {'name':"plan out <a target='_blank' href='https://grants.nih.gov/grants/policy/nihgps/HTML5/section_11/11.2.2_eligibility.htm'>NRSA</a> timeline"},
    {
        'name':'[aniAes] Rewrite the paper for Cognition',
        'descriptions':'rewrite the introduction as Watching people -> impression -> statics -> dynamics; Add more about everyday experience (add more dance studies in the intro); Add the systematic factors determining apporachable'
    },
    {
        'name':"Write letter of intent for <a target='_blank' href='https://tdg.ucla.edu/UCLA-innovation-fund'>Innovation Fund 2021</a>",
        'deadline':'May 1, 2021'
    },
    {'name':'decide on papers to present for method meeting'},
    {'name':'[presentPrinciple] ideas generation'},
    {'name':"[typicalScene] look at Xiaoyang's result files"}
];

var waiting_for = [
    {'name':'[autTaste] Run between-subject experiment next quarter'},
    {'name':'[conservTaste] Moriah is analyzing data now'},
    {
        'name':"[socAvo] Program between-subject experiment after getting Shuhao's parameters",
        'descriptions':'Multiple choice experiment: testing orientation/position x red/blue; maybe add other filler trials to make sure subjects are still engaging socially?; 7 options forced choice (tick marks appeared around the disappeared blue guy); Position question -- tip position along the moving direction; multiple trials; video mirrored and inverted to create multiple versions; reduce playing time for blue triangle; Record accuracy and errors'
    },
    {'name':'[socAvoModel] Meet for desiging wider range experiment for next quarter'},
    {'name':'[typicalScene] Xiaoyang is working on the analysis'}
];

var someday = [
    {
        'name':'Representation of Social Interaction (Tianmin)',
        'descriptions': "Think about what aspect of memory should be tested; Tianmin Shu's stimuli (Can we yoked the conditions?); postively-valenced/cooperative social interaction -> memory?"
    },
    {
        'name':'Inward Bias & Autistic Traits (Clara & Sophie)',
        'descriptions':'Need to add gaze deflection in and revise the code for Prolific and run'
    },
    {
        'name':'Modeling Biological Motion',
        'descriptions':'based on Ryali_etal_2020_faceTypicalityAttractiveness; Model for point-light walkers just like the 90/50-axis model in faces; Statistical typicality of the point-light walkers predict aesthetic experience?; Trait judgments and identify features (create database, manipulate it, etc.)'
    },
    {'name':'program online timer management app'},
    {
        'name':'Social Cues for Conversations',
        'descriptions':"social cues that signal the enjoyment of conversation and its effect on the content, length of coversation, enjoyment of your partner, rating of the partner's inattention"
    },
    {
        'name':'Framing vs. partially occluded effect in preference for scene',
        'descriptions':'How does framing influence preference of scenes?; Is it really about framing as in taking photo or creating pictures (artistic knowledge)?; Or is it about avoidance of occlusion/out of view (evolutionary explanations)?; Manipulation -- framing vs. partial occlusion, where the visible part of the image is identical'
    }
];
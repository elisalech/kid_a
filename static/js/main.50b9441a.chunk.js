(this.webpackJsonpkid_a=this.webpackJsonpkid_a||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),l=a.n(r),i=a(3),c=a(8),s=a(5),u=a(4),m=a(6),v=a(1),p=a.n(v),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDragOver=function(e){e.preventDefault()},a.handleMouseDown=function(e){e.preventDefault(),a.setState({mouseDown:!0})},a.handleMouseUp=function(){a.state.mouseDown&&a.setState({mouseDown:!1})},a.handleMouseMove=function(e){a.state.mouseDown&&a.moveThumb(e.screenX)},a.moveThumb=function(e){var t=a.props.handleValueChange,n=a.state.area.left,o=a.state.area.right,r=e-n;r>=0&&e<=o&&(t(a.calculateValue(r)),a.setState({thumb:{left:r-15}}))},a.calculateLeft=function(e){var t=a.props,n=t.min,o=t.max;return t.value/((o-n)/e)},a.calculateValue=function(e){var t=a.props,n=t.min;return e*((t.max-n)/a.state.area.width)},a.state={mouseDown:!1,area:{left:0,right:0,width:0},thumb:{left:0}},a.slideArea=o.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.slideArea.current.getBoundingClientRect(),t=e.x,a=e.width;this.setState({area:{left:t,right:t+a,width:a},thumb:{left:this.calculateLeft(a)}}),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("mousemove",this.handleMouseMove)}},{key:"render",value:function(){var e=this.state.thumb.left,t={transform:"translateX(".concat(e,"px)")};return o.a.createElement("div",{className:"Bpm"},o.a.createElement("div",{className:"Slider",ref:this.slideArea,onDragOver:this.handleDragOver,onDrop:this.handleDrop},o.a.createElement("div",{className:"thumb",style:t,onMouseDown:this.handleMouseDown})))}}]),t}(o.a.Component),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).shouldComponentUpdate=function(e,t){var n=a.state.area.width;return e.value!==a.props.value&&(t.thumb.left=a.calculateLeft(n)),!0},a.handleDragOver=function(e){e.preventDefault()},a.handleMouseDown=function(e){e.preventDefault(),a.setState({mouseDown:!0})},a.handleMouseUp=function(){a.state.mouseDown&&a.setState({mouseDown:!1})},a.handleMouseMove=function(e){a.state.mouseDown&&a.moveThumb(e.screenX)},a.moveThumb=function(e){var t=a.props,n=t.name,o=t.property,r=t.handleValueChange,l=a.state.area.left,i=a.state.area.right,c=e-l;if(c>=0&&e<=i){var s=a.calculateValue(c);console.log(n),r(n,o,s),a.setState({thumb:{left:c-15}})}},a.calculateLeft=function(e){var t=a.props,n=t.min,o=t.max;return t.value/((o-n)/e)},a.calculateValue=function(e){var t=a.props,n=t.min;return e*((t.max-n)/a.state.area.width)},a.state={mouseDown:!1,area:{left:0,right:0,width:0},thumb:{left:0}},a.slideArea=o.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.slideArea.current.getBoundingClientRect(),t=e.x,a=e.width;this.setState({area:{left:t,right:t+a,width:a},thumb:{left:this.calculateLeft(a)}}),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("mousemove",this.handleMouseMove)}},{key:"render",value:function(){var e=this.state.thumb.left,t={transform:"translateX(".concat(e,"px)")};return o.a.createElement("div",{className:"Slider",ref:this.slideArea,onDragOver:this.handleDragOver,onDrop:this.handleDrop},o.a.createElement("div",{className:"thumb",style:t,onMouseDown:this.handleMouseDown}))}}]),t}(o.a.Component),g=a(2),f=a(9),y=a.n(f),E=function(e){var t,a=e.name,n=e.value,r=e.handleToggleClick,l=y()((t={PlaySwitch:!0},Object(g.a)(t,"".concat(a),!0),Object(g.a)(t,"switchOn",!n),Object(g.a)(t,"switchOff",n),t));return o.a.createElement("div",{className:l,onClick:r})},w=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleVolume=function(e,t,n){var o=a.state.gain,r=n;o.gain.value=r,a.setState({gain:o})},a.toggleRh1=function(){var e=a.state.part1,t=a.props.toggleBack,n=e.on,o=e.part;n?e.part.stop():e.part.start(),a.setState({part1:{part:o,on:!n}}),p.a.Transport.bpm.value=a.props.bpm,p.a.Transport.start(),t()},a.toggleRh2=function(){var e=a.state.part2,t=e.on,n=e.part;t?e.part.stop():e.part.start(),a.setState({part2:{part:n,on:!t}}),p.a.Transport.bpm.value=a.props.bpm,p.a.Transport.start()},a.toggleRh3=function(){var e=a.state.part3,t=e.on,n=e.part;t?e.part.stop():e.part.start(),a.setState({part3:{part:n,on:!t}}),p.a.Transport.bpm.value=a.props.bpm,p.a.Transport.start()},a.toggleRh4=function(){var e=a.state.part4,t=e.on,n=e.part;t?e.part.stop():e.part.start(),a.setState({part4:{part:n,on:!t}}),p.a.Transport.bpm.value=a.props.bpm,p.a.Transport.start()},a.toggleRh5=function(){var e=a.state.part5,t=e.on,n=e.part;t?e.part.stop():e.part.start(),a.setState({part5:{part:n,on:!t}}),p.a.Transport.bpm.value=a.props.bpm,p.a.Transport.start()};var n=new p.a.PolySynth(1,p.a.Synth,{oscillator:{type:"triangle8",count:3,spread:30,phase:10,fadeIn:4},envelope:{attack:.3,decay:1,sustain:1,release:5,attackCurve:"exponential"}}),o=new p.a.Part((function(e,t){n.triggerAttackRelease(t.note,t.dur,e)}),[{time:"0:0:0",note:"A#4",velocity:1,dur:"4n"},{time:"0:1:0",note:"D5",velocity:1,dur:"4n"},{time:"0:2:0",note:"A5",velocity:1,dur:"2n"},{time:"0:3:0",note:"D6",velocity:1,dur:"4n"},{time:"1:0:0",note:"A#5",velocity:1,dur:"4n"},{time:"1:1:0",note:"C5",velocity:1,dur:"4n"},{time:"1:2:0",note:"F5",velocity:1,dur:"4n"},{time:"1:3:0",note:"F6",velocity:1,dur:"4n"},{time:"2:0:0",note:"G5",velocity:1,dur:"4n"},{time:"2:1:0",note:"E5",velocity:1,dur:"4n"},{time:"2:2:0",note:"A#5",velocity:1,dur:"4n"},{time:"2:3:0",note:"G6",velocity:1,dur:"4n"},{time:"3:0:0",note:"F4",velocity:1,dur:"4n"},{time:"3:1:0",note:"C5",velocity:1,dur:"4n"},{time:"3:2:0",note:"G4",velocity:.3,dur:"4n"},{time:"3:3:0",note:"D5",velocity:.3,dur:"4n"}]);o.loop=!0,o.loopEnd="4m";var r=new p.a.Part((function(e,t){n.triggerAttackRelease(t.note,t.dur,e)}),[{time:"0:0:0",note:"A2",velocity:.3,dur:"2n"},{time:"0:2:0",note:"A#2",velocity:.3,dur:"4n"},{time:"0:3:0",note:"D3",velocity:.5,dur:"2n"},{time:"1:1:0",note:"A3",velocity:1,dur:"2n"},{time:"1:2:0",note:"A3",velocity:1,dur:"4n"},{time:"1:3:0",note:"F6",velocity:1,dur:"4n"},{time:"2:0:0",note:"G5",velocity:1,dur:"4n"},{time:"2:1:0",note:"E5",velocity:1,dur:"4n"},{time:"2:2:0",note:"A#5",velocity:1,dur:"4n"},{time:"2:3:0",note:"G6",velocity:1,dur:"4n"},{time:"3:0:0",note:"F4",velocity:1,dur:"4n"},{time:"3:1:0",note:"C5",velocity:1,dur:"4n"},{time:"3:2:0",note:"G4",velocity:.3,dur:"4n"},{time:"3:3:0",note:"D5",velocity:.3,dur:"4n"}]);r.loop=!0,r.loopEnd="4m";var l=new p.a.Part((function(e,t){n.triggerAttackRelease(t.note,t.dur,e)}),[{time:"0:0:0",note:"D4",velocity:1,dur:"4n"},{time:"0:1:0",note:"F3",velocity:1,dur:"4n"},{time:"0:2:0",note:"A3",velocity:1,dur:"4n"},{time:"0:3:0",note:"F3",velocity:.1,dur:"4n"},{time:"1:0:0",note:"D4",velocity:.3,dur:"4n"},{time:"1:1:0",note:"F3",velocity:.3,dur:"4n"},{time:"1:2:0",note:"A3",velocity:.3,dur:"4n"},{time:"1:3:0",note:"F3",velocity:.3,dur:"4n"},{time:"2:0:0",note:"D5",velocity:.3,dur:"4n"},{time:"2:1:0",note:"F4",velocity:.3,dur:"4n"},{time:"2:2:0",note:"A4",velocity:.3,dur:"4n"},{time:"2:3:0",note:"F4",velocity:.3,dur:"4n"},{time:"3:0:0",note:"D5",velocity:.3,dur:"4n"},{time:"3:1:0",note:"F4",velocity:.3,dur:"4n"},{time:"3:2:0",note:"A4",velocity:.3,dur:"4n"},{time:"3:3:0",note:"F4",velocity:.3,dur:"4n"}]);l.loop=!0,l.loopEnd="4m";var c=new p.a.Part((function(e,t){n.triggerAttackRelease(t.note,t.dur,e)}),[{time:"0:0:0",note:"D4",velocity:1,dur:"4n"},{time:"0:1:0",note:"G4",velocity:1,dur:"4n"},{time:"0:2:0",note:"B4",velocity:1,dur:"4n"},{time:"0:3:0",note:"G4",velocity:.1,dur:"4n"},{time:"1:0:0",note:"D4",velocity:.3,dur:"4n"},{time:"1:1:0",note:"G5",velocity:.3,dur:"4n"},{time:"1:2:0",note:"B4",velocity:.3,dur:"4n"},{time:"1:3:0",note:"G5",velocity:.3,dur:"4n"},{time:"2:0:0",note:"D5",velocity:.3,dur:"4n"},{time:"2:1:0",note:"G6",velocity:.3,dur:"4n"},{time:"2:2:0",note:"B5",velocity:.3,dur:"4n"},{time:"2:3:0",note:"G4",velocity:.3,dur:"4n"},{time:"3:0:0",note:"D5",velocity:.3,dur:"4n"},{time:"3:1:0",note:"G4",velocity:.3,dur:"4n"},{time:"3:2:0",note:"B4",velocity:.3,dur:"4n"},{time:"3:3:0",note:"G4",velocity:.3,dur:"4n"}]);c.loop=!0,c.loopEnd="4m";var m=new p.a.Part((function(e,t){n.triggerAttackRelease(t.note,t.dur,e)}),[{time:"0:0:0",note:"F4",velocity:1,dur:"4n"},{time:"0:1:0",note:"E4",velocity:1,dur:"4n"},{time:"0:2:0",note:"D4",velocity:1,dur:"4n"},{time:"0:3:0",note:"E5",velocity:.1,dur:"4n"},{time:"1:0:0",note:"D5",velocity:.3,dur:"4n"},{time:"1:1:0",note:"C5",velocity:.3,dur:"4n"},{time:"1:2:0",note:"G4",velocity:.3,dur:"4n"},{time:"1:3:0",note:"C4",velocity:.3,dur:"4n"},{time:"2:0:0",note:"F4",velocity:.3,dur:"4n"},{time:"2:1:0",note:"E4",velocity:.3,dur:"4n"},{time:"2:2:0",note:"B4",velocity:.3,dur:"4n"},{time:"2:3:0",note:"A4",velocity:.3,dur:"4n"},{time:"3:0:0",note:"C5",velocity:.3,dur:"4n"},{time:"3:1:0",note:"D4",velocity:.3,dur:"4n"},{time:"3:2:0",note:"E4",velocity:.3,dur:"4n"},{time:"3:3:0",note:"C4",velocity:.3,dur:"4n"}]);m.loop=!0,m.loopEnd="4m";var v=new p.a.Gain(.5);return n.chain(v,p.a.Master),a.state={rhSynth:n,gain:v,part1:{part:o,on:!1},part2:{part:r,on:!1},part3:{part:l,on:!1},part4:{part:c,on:!1},part5:{part:m,on:!1},bpm:120},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.part1;e.part2,e.part3,e.part4,e.part5;return o.a.createElement("div",{className:"rhSynth"},o.a.createElement("div",{className:"rhLoops"},o.a.createElement("div",{className:"mainControls"},o.a.createElement("div",{className:"bpm contol"},o.a.createElement("h2",null,"TEMPO: ",this.props.bpm),o.a.createElement(d,{min:"0",max:"220",value:this.props.bpm,handleValueChange:this.props.bpmChange})),o.a.createElement("div",{className:"volume control"},o.a.createElement("h2",null,"Volume"),o.a.createElement(h,{name:"vol",min:"0",max:"1",value:this.state.gain.gain.value,handleValueChange:this.handleVolume}))),o.a.createElement("div",{className:"loops"},o.a.createElement("div",{className:"playSynth"},o.a.createElement(E,{name:"play",value:t.on,handleToggleClick:this.toggleRh1})),o.a.createElement("div",{className:"lyrics"},o.a.createElement("p",null,"We got heads on sticks And you got them toothpicks We got heads on sticks But you go in circles")))))}}]),t}(o.a.Component),b=function(e){var t=e.value,a=e.min,n=e.max,r=e.changeOct;return o.a.createElement("input",{type:"number",min:a,max:n,value:t,onChange:r})},D=function(e){e.name,e.property;var t=e.option,a=e.current,n=e.handleClick,r=y()({Button:!0,on:t===a});return o.a.createElement("div",{className:r,onClick:function(){return n(t)}},t)},k=function(e){var t=e.name,a=e.property,n=e.set,r=e.value,l=e.handleValueChange,i=n.map((function(e,n){return o.a.createElement(D,{name:t,property:a,option:e,current:r,handleClick:l,key:n})}));return o.a.createElement("div",{className:"ButtonSet"},i)},S=function(e){var t=e.note,a=e.octave,n=e.currentNote,r=e.handleMouseUp,l=e.handleMouseDown,i=e.playKey,c=y()({keyButton:!0,pressed:t===n,black:2===t.length,white:1===t.length});return o.a.createElement("div",{className:c,id:t,onMouseDown:function(){return l(t,a)},onMouseUp:r},i)},C=a(15),N=0,j=void 0,M=void 0;function O(e){return N=e.octave,j=e.handleMouseDown,M=e.handleMouseDown,function(e){var t=Object(n.useState)(!1),a=Object(C.a)(t,2),o=a[0],r=a[1];function l(e){var t=e.key;console.log(t),"a"===t?(j("C",N),r(!0)):"w"===t?(j("C#",N),r(!0)):"s"===t?(j("D",N),r(!0)):"e"===t?(j("D#",N),r(!0)):"d"===t?(j("E",N),r(!0)):"f"===t?(j("F",N),r(!0)):"t"===t?(j("F#",N),r(!0)):"g"===t?(j("G",N),r(!0)):"y"===t?(j("G#",N),r(!0)):"h"===t?(j("A",N),r(!0)):"y"===t?(j("A#",N),r(!0)):"j"===t&&(j("B",N),r(!0))}function i(e){var t=e.key;console.log(t),"a"===t?(M(),r(!1)):"w"===t?(M(),r(!1)):"s"===t?(M(),r(!1)):"e"===t?(M(),r(!1)):"d"===t?(M(),r(!1)):"f"===t?(M(),r(!1)):"t"===t?(M(),r(!1)):"g"===t?(M(),r(!1)):"y"===t?(M(),r(!1)):"h"===t?(M(),r(!1)):"y"===t?(M(),r(!1)):"j"===t&&(M(),r(!1))}return Object(n.useEffect)((function(){return window.addEventListener("keydown",l),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",l),window.removeEventListener("keyup",i)}}),[]),o}()}var x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeOct=function(e){a.setState({octave:e.target.value})},a.state={notes:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],playKeys:["a","w","s","e","d","f","t","g","y","h","u","j"],octave:3},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleMouseUp,a=e.handleMouseDown,n=e.name,r=e.changeWaveType,l=e.typeValue,i=e.currentNote,c=this.state,s=c.notes,u=c.playKeys,m=c.octave,v=s.map((function(e,n){return o.a.createElement(S,{octave:m,note:e,key:n,playKey:u[n],currentNote:i,handleMouseUp:t,handleMouseDown:a})}));return o.a.createElement("div",{className:"keySynth"},o.a.createElement("div",{className:"keyContainer"},o.a.createElement(O,{handleMouseDown:a,handleMouseUp:t,octave:m}),o.a.createElement("div",{className:"keyboard"},v)),o.a.createElement("div",{className:"keyPresets"},o.a.createElement("div",{className:"keyControls"},o.a.createElement("div",{className:"keyVolume"},o.a.createElement("h1",null,"Volume"),o.a.createElement(h,{name:"vol",min:"0",max:"1",value:this.props.gain,handleValueChange:this.props.handleVolume})),o.a.createElement(b,{value:m,min:"0",max:"6",changeOct:this.changeOct})),o.a.createElement("div",{className:"keyWaves"},o.a.createElement(k,{name:n,property:"type",set:["sine","sine4","triangle","triangle8","square","sawtooth"],value:l,handleValueChange:r}))))}}]),t}(o.a.Component),V=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleMouseDown=function(e,t){var n=a.state,o=n.keySynth,r=n.currentNote;o.triggerAttack("".concat(e).concat(t)),r=e,a.setState({keySynth:o,currentNote:r})},a.handleMouseUp=function(){var e=a.state,t=e.keySynth;e.currentNote;t.triggerRelease(),a.setState({keySynth:t,currentNote:void 0})},a.changeWaveType=function(e){var t=a.state.keySynth;t.oscillator.type=e,a.setState({keySynth:t})},a.toggleEffect=function(e){console.log(e);var t=a.state[e],n=t.effect,o=t.wet,r=t.on,l=t.name;n.wet.value=r?0:o,r=!r,a.setState(Object(g.a)({},"".concat(e),{effect:n,wet:o,on:r,name:l}))},a.handleVolume=function(e,t,n){var o=a.state.gain,r=n;o.gain.value=r,a.setState({gain:o})},a.handleEnvelope=function(e,t,n){a.state["".concat(e)].envelope[t]=n,a.forceUpdate()};var n=new p.a.Synth({oscillator:{type:"sine"},envelope:{attack:2,decay:1,sustain:.4,release:1}}),o=new p.a.Gain(.5);return n.chain(o,p.a.Master),a.state={keySynth:n,gain:o,currentNote:void 0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.keySynth,a=e.currentNote;return o.a.createElement("div",{className:"keySynthTest"},o.a.createElement(x,{valueVol:t.volume.value,handleValueChange:this.volumeChange,currentNote:a,typeValue:t.oscillator.type,name:"keySynth",gain:this.state.gain.gain.value,changeWaveType:this.changeWaveType,handleMouseDown:this.handleMouseDown,handleMouseUp:this.handleMouseUp,handleVolume:this.handleVolume}))}}]),t}(o.a.Component),T=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleMouseDown=function(e){e.preventDefault(),a.setState({mouseDown:!0,screenY:e.clientX})},a.handleMouseMove=function(e){a.state.mouseDown&&(a.moveKnob(e.clientX),a.setState({name:(a.state.value/a.props.increment).toFixed(2)}))},a.handleMouseUp=function(){var e=a.props;e.name,e.handleMouseUp;a.state.mouseDown&&a.setState({mouseDown:!1,name:a.props.paramName.replace(/^\w/,(function(e){return e.toUpperCase()})).slice(0,8)})},a.moveKnob=function(e){var t=parseInt(a.props.min),n=parseInt(a.props.max),o=a.state.screenY,r=(a.state.deg,e-o),l=a.state.value;(l+=r)<t?l=t:l>n&&(l=n),a.props.handleValueChange(a.props.name,a.props.paramName,l/a.props.increment,a.props.synthN),a.setState({screenY:e,value:l,deg:a.props.initialDeg+a.calculateDeg(l)})},a.calculateDeg=function(e){var t=a.props.max;return e*(a.props.overDeg/t)};var n=a.props.increment*a.props.increment;return a.state={mouseDown:!1,name:a.props.paramName.replace(/^\w/,(function(e){return e.toUpperCase()})).slice(0,8),value:n,deg:a.props.initialDeg,screenY:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.value*this.props.increment,t=this.calculateDeg(e);this.setState({mouseDown:!1,value:e,deg:this.props.initialDeg+t,screenY:0}),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("mousemove",this.handleMouseMove)}},{key:"render",value:function(){var e=this.state.deg,t={transform:"rotate(".concat(e,"deg)")};return o.a.createElement("div",{className:"KnobWrapper"},o.a.createElement("h1",null,this.state.name),o.a.createElement("div",{className:"Knob",style:t,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove}))}}]),t}(o.a.Component),L=function(e){var t=e.current,a=e.value,n=e.handleClick,r=y()(Object(g.a)({ToggleSwitch:!0,on:t},"".concat(a),!0));return o.a.createElement("div",{className:"toggleContainer"},o.a.createElement("div",{className:r,onClick:function(){return n(a)}},o.a.createElement("div",{className:"toggleSwitchStroke"})))},A=function(e){var t=e.handler,a=(e.subHandler,e.value),n=e.on,r=e.toggleEffect;return o.a.createElement("div",{className:"Effect"},o.a.createElement("h1",null,"Chorus"),o.a.createElement(L,{current:n,handleClick:r,value:"chorus"}),o.a.createElement("div",{className:"controlsContainer"},o.a.createElement("div",{className:"row"},o.a.createElement(T,{name:"chorus",paramName:"wet",min:1,max:100,increment:100,initialDeg:-45,overDeg:270,value:a.wet.value,handleValueChange:t}),o.a.createElement(T,{name:"chorus",paramName:"frequency",min:1,max:100,increment:1,initialDeg:-45,overDeg:270,value:a.frequency.value,handleValueChange:t}),o.a.createElement(T,{name:"chorus",paramName:"delayTime",min:2,max:20,increment:1,initialDeg:-45,overDeg:270,value:a.delayTime,handleValueChange:t})),o.a.createElement("div",{className:"row"},o.a.createElement(T,{name:"chorus",paramName:"depth",min:2,max:20,increment:1,initialDeg:-45,overDeg:270,value:a.depth,handleValueChange:t}),o.a.createElement(T,{name:"chorus",paramName:"spread",min:0,max:180,increment:1,initialDeg:-45,overDeg:270,value:a.spread,handleValueChange:t}))))},R=function(e){var t=e.current,a=e.items,n=e.names,r=e.handler,l="pickerItem"+a.length;return o.a.createElement("div",{className:"pickerWrapper col ButtonSet"},a.map((function(e,a){return o.a.createElement("div",{key:e,className:t===e?l+" on Button":l+" Button",onClick:function(){return r(e)}},n[a])})))},F=function(e){var t=e.value,a=e.handler,n=e.toggleEffect,r=e.on;return o.a.createElement("div",{className:"Effect"},o.a.createElement("h1",null,"Distortion"),o.a.createElement(L,{current:r,handleClick:n,value:"distortion"}),o.a.createElement("div",{className:"controlsContainer"},o.a.createElement("div",{className:"row"},o.a.createElement(T,{name:"distortion",paramName:"wet",min:1,max:100,increment:100,initialDeg:-45,overDeg:270,value:t.wet.value,handleValueChange:a}),o.a.createElement(T,{name:"distortion",paramName:"distortion",min:1,max:100,increment:1,initialDeg:-45,overDeg:270,value:t.distortion,handleValueChange:a})),o.a.createElement(R,{current:t.oversample,items:["none","2x","4x"],names:["none","2x","4x"],handler:function(e){a("distortion","oversample",e)}})))},B=function(e){var t=e.value,a=e.toggleEffect,n=e.on,r=e.handler;return o.a.createElement("div",{className:"Effect"},o.a.createElement("h1",null,"JC Reverb"),o.a.createElement(L,{current:n,handleClick:a,value:"jcReverb"}),o.a.createElement("div",{className:"controlsContainer"},o.a.createElement("div",{className:"row"},o.a.createElement(T,{name:"jcReverb",paramName:"wet",min:1,max:100,increment:100,initialDeg:-45,overDeg:270,value:t.wet.value,handleValueChange:r}),o.a.createElement(T,{name:"jcReverb",paramName:"roomSize",min:0,max:100,increment:100,initialDeg:-45,overDeg:270,value:t.roomSize.value,handleValueChange:r}))))},U=function(e){var t=e.on,a=e.toggleEffect,n=e.value,r=e.handler;return o.a.createElement("div",{className:"Effect"},o.a.createElement("h1",null,"Feedback Delay"),o.a.createElement(L,{value:"feedbackDelay",current:t,handleClick:a}),o.a.createElement("div",{className:"controlsContainer"},o.a.createElement("div",{className:"row"},o.a.createElement(T,{name:"feedbackDelay",paramName:"wet",min:1,max:100,increment:100,initialDeg:-45,overDeg:270,value:n.wet.value,handleValueChange:r}),o.a.createElement(T,{name:"feedbackDelay",paramName:"delayTime",min:1,max:100,increment:100,initialDeg:-45,overDeg:270,value:n.delayTime.value,handleValueChange:r}))))},G=function(e){var t=e.handler,a=e.value,n=e.on,r=e.toggleEffect;return o.a.createElement("div",{className:"Effect"},o.a.createElement("h1",null,"Vibrato"),o.a.createElement(L,{current:n,handleClick:r,value:"vibrato"}),o.a.createElement("div",{className:"controlsContainer"},o.a.createElement("div",{className:"row"},o.a.createElement(T,{name:"vibrato",paramName:"wet",min:1,max:100,increment:100,initialDeg:-45,overDeg:270,value:a.wet.value,handleValueChange:t}),o.a.createElement(T,{name:"vibrato",paramName:"frequency",min:1,max:100,increment:1,initialDeg:-45,overDeg:270,value:a.wet.value,handleValueChange:t}),o.a.createElement(T,{name:"vibrato",paramName:"depth",min:1,max:100,increment:100,initialDeg:-45,overDeg:270,value:a.wet.value,handleValueChange:t})),o.a.createElement(R,{current:a.type,items:["sine","triangle","square","sawtooth"],names:["sine","triangle","square","sawtooth"],handler:function(e){t("vibrato","type",e)}})))},W=function(e){var t=e.synth,a=e.handler,n=e.subHandler,r=e.toggleEffect;return o.a.createElement("div",{className:"effectsWrapper row"},o.a.createElement(A,{value:t.chorus.effect,handler:a,subHandler:n,on:t.chorus.on,toggleEffect:r}),o.a.createElement(G,{value:t.vibrato.effect,handler:a,subHandler:n,on:t.vibrato.on,toggleEffect:r}),o.a.createElement(F,{value:t.distortion.effect,handler:a,subHandler:n,on:t.distortion.on,toggleEffect:r}),o.a.createElement(B,{value:t.jcReverb.effect,handler:a,subHandler:n,on:t.jcReverb.on,toggleEffect:r}),o.a.createElement(U,{value:t.feedbackDelay.effect,handler:a,subHandler:n,on:t.feedbackDelay.on,toggleEffect:r}))},z=function(e){var t=e.env,a=e.name,n=e.handleEnvelope,r=y()({Envelope:!0,KeyEnv:"keySynth"===a,RhEnv:"rhSynth"===a,AmbientEnv:"ambSynth"===a});return o.a.createElement("div",{className:r},o.a.createElement("div",{className:"row"},o.a.createElement(T,{name:a,paramName:"attack",min:1,max:150,increment:10,initialDeg:-45,overDeg:270,value:t.attack,handleValueChange:n}),o.a.createElement(T,{name:a,paramName:"decay",min:1,max:150,increment:10,initialDeg:-45,overDeg:270,value:t.decay,handleValueChange:n})),o.a.createElement("div",{className:"row"},o.a.createElement(T,{name:a,paramName:"sustain",min:1,max:150,increment:10,initialDeg:-45,overDeg:270,value:t.sustain,handleValueChange:n}),o.a.createElement(T,{name:a,paramName:"release",min:1,max:150,increment:10,initialDeg:-45,overDeg:270,value:t.release,handleValueChange:n})))},H=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeWaveType=function(e){var t=a.state,n=t.ambSynth1,o=t.ambSynth2,r=t.ambSynth3,l=t.ambSynth4,i=t.ambSynth5,c=t.ambSynth6,s=t.ambSynth7;n.voice.oscillator.type=e,o.voice.oscillator.type=e,r.voice.oscillator.type=e,l.voice.oscillator.type=e,i.voice.oscillator.type=e,c.voice.oscillator.type=e,s.voice.oscillator.type=e,a.setState({ambSynth1:n,ambSynth2:o,ambSynth3:r,ambSynth4:l,ambSynth5:i,ambSynth6:c,ambSynth7:s})},a.toggleEffect=function(e){console.log(e);var t=a.state[e],n=t.effect,o=t.wet,r=t.on,l=t.name;n.wet.value=r?0:o,r=!r,a.setState(Object(g.a)({},"".concat(e),{effect:n,wet:o,on:r,name:l}))},a.handleVolume=function(e,t,n){var o=a.state.gain,r=n;o.gain.value=r,a.setState({gain:o})},a.handleValueChange=function(e,t,n){var o=a.state[e],r=o.effect,l=o.wet,i=o.on,c=o.name;"wet"===r[t]?(r[t].value=!0===i?n:0,l=n):"object"==typeof r["".concat(t)]?r["".concat(t)].value=n:r["".concat(t)]=n,a.setState(Object(g.a)({},"".concat(e),{name:c,effect:r,wet:l,on:i}))},a.handleSubValueChange=function(e,t,n,o){var r=a.state[e],l=r.effect,i=r.wet,c=r.on,s=r.name;"object"==typeof l["".concat(t)]["".concat(n)]?l["".concat(t)]["".concat(n)].value=o:l["".concat(t)]["".concat(n)]=o,a.setState(Object(g.a)({},"".concat(e),{name:s,effect:l,wet:i,on:c}))},a.handleEnvelope=function(e,t){var n=a.state,o=n.ambSynth1,r=n.ambSynth2,l=n.ambSynth3,i=n.ambSynth4,c=n.ambSynth5,s=n.ambSynth6,u=n.ambSynth7;o.envelope[e]=t,r.envelope[e]=t,l.envelope[e]=t,i.envelope[e]=t,c.envelope[e]=t,s.envelope[e]=t,u.envelope[e]=t,a.forceUpdate()},a.toggleLoop=function(e){var t=a.state[e],n=t.loop,o=t.on;o?n.stop():n.start(),a.setState(Object(g.a)({},"".concat(e),{loop:n,on:!o})),p.a.Transport.bpm.value=a.props.bpm,p.a.Transport.start()};var n=new p.a.Synth({oscillator:{type:"sine"},envelope:{attack:1,decay:1,sustain:.4,release:1}}),o=new p.a.Synth({oscillator:{type:"sine"},envelope:{attack:1,decay:1,sustain:.4,release:1}}),r=new p.a.Synth({oscillator:{type:"sine"},envelope:{attack:1,decay:1,sustain:.4,release:1}}),l=new p.a.Synth({oscillator:{type:"sine"},envelope:{attack:1,decay:1,sustain:.4,release:1}}),c=new p.a.Synth({oscillator:{type:"sine"},envelope:{attack:1,decay:1,sustain:.4,release:1}}),m=new p.a.Synth({oscillator:{type:"sine"},envelope:{attack:1,decay:1,sustain:.4,release:1}}),v=new p.a.Synth({oscillator:{type:"sine"},envelope:{attack:1,decay:1,sustain:.4,release:1}}),d=["F4","G4","A4","A#4","C5","D5","E5"],h=new p.a.Loop((function(e){n.triggerAttackRelease(d[0],"2n",e)}),"8n"),f=new p.a.Loop((function(e){o.triggerAttackRelease(d[1],"4n",e)}),"8n"),y=new p.a.Loop((function(e){r.triggerAttackRelease(d[2],"4n",e)}),"16n"),E=new p.a.Loop((function(e){l.triggerAttackRelease(d[3],"2n",e)}),"2n"),w=new p.a.Loop((function(e){c.triggerAttackRelease(d[4],"4n",e)}),"8n"),b=new p.a.Loop((function(e){m.triggerAttackRelease(d[5],"4n",e)}),"16n"),D=new p.a.Loop((function(e){v.triggerAttackRelease(d[6],"2n",e)}),"2n"),k=new p.a.Chorus,S=new p.a.FeedbackDelay,C=new p.a.JCReverb,N=new p.a.Distortion,j=new p.a.Vibrato;k.wet.value=0,S.wet.value=0,C.wet.value=0,N.wet.value=0,j.wet.value=0;var M=new p.a.Gain(.3);return n.chain(k,S,C,N,j,M,p.a.Master),o.chain(k,S,C,N,j,M,p.a.Master),r.chain(k,S,C,N,j,M,p.a.Master),l.chain(k,S,C,N,j,M,p.a.Master),c.chain(k,S,C,N,j,M,p.a.Master),m.chain(k,S,C,N,j,M,p.a.Master),v.chain(k,S,C,N,j,M,p.a.Master),a.state={chorus:{name:"chorus",effect:k,wet:0,on:!1,frTemp:0},feedbackDelay:{name:"feedbackDelay",effect:S,wet:0,on:!1,frTemp:0},jcReverb:{name:"jcReverb",effect:C,wet:0,on:!1,frTemp:0},vibrato:{name:"vibrato",effect:j,wet:0,on:!1,frTemp:0},distortion:{name:"distortion",effect:N,wet:0,on:!1,frTemp:0},ambSynth1:n,ambSynth2:o,ambSynth3:r,ambSynth4:l,ambSynth5:c,ambSynth6:m,ambSynth7:v,gain:M,tuneNow:d,loop1:{loop:h,on:!1},loop2:{loop:f,on:!1},loop3:{loop:y,on:!1},loop4:{loop:E,on:!1},loop5:{loop:w,on:!1},loop6:{loop:b,on:!1},loop7:{loop:D,on:!1}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.loop1,n=t.loop2,r=t.loop3,l=t.loop4,i=t.loop5,c=t.loop6,s=t.loop7;return o.a.createElement("div",{className:"AmbientSynth"},o.a.createElement("div",{className:"ambientFirstRow"},o.a.createElement("div",{className:"ambientLoops"},o.a.createElement("div",{className:"mainControls"},o.a.createElement("div",{className:"volume"},o.a.createElement("h2",null,"Volume"),o.a.createElement(h,{name:"vol",min:"0",max:"1",value:this.state.gain.gain.value,handleValueChange:this.handleVolume}))),o.a.createElement("div",{className:"ambientEnvelope"},o.a.createElement(z,{handleEnvelope:this.handleEnvelope,env:this.state.ambSynth1.envelope,name:"ambSynth"})),o.a.createElement("div",{className:"loops"},o.a.createElement("div",{className:"loop loop1"},o.a.createElement("h2",null,"Loop 1"),o.a.createElement(E,{name:"play",value:a.on,handleToggleClick:function(){return e.toggleLoop("loop1")}})),o.a.createElement("div",{className:"loop loop2"},o.a.createElement("h2",null,"Loop 2"),o.a.createElement(E,{name:"play",value:n.on,handleToggleClick:function(){return e.toggleLoop("loop2")}})),o.a.createElement("div",{className:"loop loop3"},o.a.createElement("h2",null,"Loop 3"),o.a.createElement(E,{name:"play",value:r.on,handleToggleClick:function(){return e.toggleLoop("loop3")}})),o.a.createElement("div",{className:"loop loop1"},o.a.createElement("h2",null,"Loop 4"),o.a.createElement(E,{name:"play",value:l.on,handleToggleClick:function(){return e.toggleLoop("loop4")}})),o.a.createElement("div",{className:"loop loop2"},o.a.createElement("h2",null,"Loop 5"),o.a.createElement(E,{name:"play",value:i.on,handleToggleClick:function(){return e.toggleLoop("loop5")}})),o.a.createElement("div",{className:"loop loop4"},o.a.createElement("h2",null,"Loop 6"),o.a.createElement(E,{name:"play",value:c.on,handleToggleClick:function(){return e.toggleLoop("loop6")}})),o.a.createElement("div",{className:"loop loop3"},o.a.createElement("h2",null,"Loop 7"),o.a.createElement(E,{name:"play",value:s.on,handleToggleClick:function(){return e.toggleLoop("loop7")}}))))),o.a.createElement(W,{synth:this.state,handler:this.handleValueChange,subHandler:this.handleSubValueChange,toggleEffect:this.toggleEffect}))}}]),t}(o.a.Component),P=(a(21),a(10)),K=a.n(P),I=a(12),_=a(7),q=function(e){var t=new _.f(-1,1,1,-1,0,1),a=new _.j,n=new _.m,o={minFilter:_.b,magFilter:_.e,format:_.i},r=new _.n(512,512,o),l=new _.n(512,512,o),i=new _.k({uniforms:{mapLeft:{value:r.texture},mapRight:{value:l.texture}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = vec2( uv.x, uv.y );","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D mapLeft;","uniform sampler2D mapRight;","varying vec2 vUv;","void main() {","\tvec2 uv = vUv;","\tif ( ( mod( gl_FragCoord.y, 2.0 ) ) > 1.00 ) {","\t\tgl_FragColor = texture2D( mapLeft, uv );","\t} else {","\t\tgl_FragColor = texture2D( mapRight, uv );","\t}","}"].join("\n")}),c=new _.c(new _.h(2,2),i);a.add(c),this.setSize=function(t,a){e.setSize(t,a);var n=e.getPixelRatio();r.setSize(t*n,a*n),l.setSize(t*n,a*n)},this.render=function(o,i){o.updateMatrixWorld(),null===i.parent&&i.updateMatrixWorld(),n.update(i),e.setRenderTarget(r),e.clear(),e.render(o,n.cameraL),e.setRenderTarget(l),e.clear(),e.render(o,n.cameraR),e.setRenderTarget(null),e.render(a,t)}},X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).dropsInit=Object(I.a)(K.a.mark((function e(){var t,a,n,o,r,l,i,c,s,u,m,v,p,d,h,g;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g=function(){return(g=Object(I.a)(K.a.mark((function e(){var n,c,s,u;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=1e-4*Date.now(),t.position.x+=.05*(l-t.position.x),t.position.y+=.05*(-i-t.position.y),t.lookAt(a.position),c=0,s=r.length;c<s;c++)(u=r[c]).position.x=5*Math.cos(n+c),u.position.y=5*Math.sin(n+1.1*c);o.render(a,t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},h=function(){return g.apply(this,arguments)},d=function(){requestAnimationFrame(d),h()},p=function(e){l=(e.clientX-c)/100,i=(e.clientY-s)/1e3},v=function(){c=window.innerWidth/2,s=window.innerHeight/2,t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)},m=function(){return(m=Object(I.a)(K.a.mark((function e(){var l,i,c,s,u,m,p,h,g,f;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=document.getElementById("drops"),(t=new _.g(60,window.innerWidth/window.innerHeight,.01,100)).position.z=3,t.focalLength=3,".png",c=[(i="./kid_a/kid_a-")+"px.png",i+"nx.png",i+"py.png",i+"ny.png",i+"pz.png",i+"nz.png"],e.next=9,(new _.a).load(c);case 9:for(s=e.sent,console.log("textureCube",s),(a=new _.j).background=s,u=new _.l(.1,32,16),m=new _.d({color:16777215}),p=0;p<150;p++)(h=new _.c(u,m)).position.x=10*Math.random()-5,h.position.y=10*Math.random()-5,h.position.z=10*Math.random()-5,h.scale.x=h.scale.y=h.scale.z=3*Math.random()+1,a.add(h),r.push(h);(n=new _.o).setPixelRatio(window.devicePixelRatio),l.appendChild(n.domElement),g=window.innerWidth||2,f=window.innerHeight||2,(o=new q(n)).setSize(g,f),window.addEventListener("resize",v,!1),d();case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)},u=function(){return m.apply(this,arguments)},r=[],l=0,i=0,c=window.innerWidth/2,s=window.innerHeight/2,document.addEventListener("mousemove",p,!1),u();case 14:case"end":return e.stop()}}),e)}))),a.state=null,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.dropsInit()}},{key:"render",value:function(){return o.a.createElement("div",{id:"drops"})}}]),t}(n.Component),Y=function(){return o.a.createElement("div",{className:"ThreeContainer"},o.a.createElement(X,null))},J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).bpmChange=function(e){var t=a.state.bpm;t=Math.round(e),p.a.Transport.bpm.value=t,a.setState({bpm:t})},a.toggleBack=function(){var e=a.state.showBack;a.setState({showBack:!e})},a.state={bpm:90,viewSet:"keySynth",showBack:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.bpm,a=e.viewSet,n=e.showBack;return o.a.createElement("div",{className:"app"},n&&o.a.createElement(Y,null),o.a.createElement("div",{className:"synthsContainer"},o.a.createElement(w,{toggleBack:this.toggleBack,bpmChange:this.bpmChange,bpm:t}),o.a.createElement(V,{viewSet:a}),o.a.createElement(H,{viewSet:a,bpm:t})))}}]),t}(o.a.Component);a(23),a(24),a(25),a(26),a(27),a(28),a(29),a(30),a(31),a(32),a(33),a(34);l.a.render(o.a.createElement(J,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.50b9441a.chunk.js.map
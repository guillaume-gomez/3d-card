(this.csbJsonP=this.csbJsonP||[]).push([["default~app~monaco-editor"],{"../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=monaco-linter.[hash:8].worker.js!./src/app/overmind/effects/vscode/LinterWorker/index.js":function(t,e){t.exports=function(){return new Worker("/monaco-linter.ace8e018.worker.js")}},"../common/lib/utils/diff/index.js":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getTextOperation=e.findDiff=void 0;const n=i("../../node_modules/ot/lib/index.js"),r=i("../common/lib/utils/diff/lcs.js");function o(t,e,i){return(0,r.stringDiff)(t,e,i)}e.findDiff=o,e.getTextOperation=function(t,e){const i=new n.TextOperation;if(Math.max(t.length,e.length)>1e4)return i.delete(t.length),i.insert(e),console.warn("Not optimizing edits, file is larger than 10000b"),i;const r=o(t,e,!1);let a=0;return r.forEach(n=>{const r=n.originalStart,o=n.originalStart+n.originalLength;r-a!=0&&i.retain(r-a),a=o;const s=t.substr(r,n.originalLength),h=e.substr(n.modifiedStart,n.modifiedLength);s!==h&&(i.insert(h),i.delete(n.originalLength))}),i.retain(t.length-i.baseLength),i}},"../common/lib/utils/diff/lcs.js":function(t,e,i){"use strict";e.__esModule=!0;var n=function(){function t(t,e,i,n){this.originalStart=t,this.originalLength=e,this.modifiedStart=i,this.modifiedLength=n}return t.prototype.getOriginalEnd=function(){return this.originalStart+this.originalLength},t.prototype.getModifiedEnd=function(){return this.modifiedStart+this.modifiedLength},t}();function r(t){return{getLength:function(){return t.length},getElementAtIndex:function(e){return t.charCodeAt(e)}}}e.stringDiff=function(t,e,i){return new h(r(t),r(e)).ComputeDiff(i)};var o=function(){function t(){}return t.Assert=function(t,e){if(!t)throw new Error(e)},t}();e.Debug=o;var a=function(){function t(){}return t.Copy=function(t,e,i,n,r){for(var o=0;o<r;o++)i[n+o]=t[e+o]},t}();e.MyArray=a;var s=function(){function t(){this.m_changes=[],this.m_originalStart=Number.MAX_VALUE,this.m_modifiedStart=Number.MAX_VALUE,this.m_originalCount=0,this.m_modifiedCount=0}return t.prototype.MarkNextChange=function(){(this.m_originalCount>0||this.m_modifiedCount>0)&&this.m_changes.push(new n(this.m_originalStart,this.m_originalCount,this.m_modifiedStart,this.m_modifiedCount)),this.m_originalCount=0,this.m_modifiedCount=0,this.m_originalStart=Number.MAX_VALUE,this.m_modifiedStart=Number.MAX_VALUE},t.prototype.AddOriginalElement=function(t,e){this.m_originalStart=Math.min(this.m_originalStart,t),this.m_modifiedStart=Math.min(this.m_modifiedStart,e),this.m_originalCount++},t.prototype.AddModifiedElement=function(t,e){this.m_originalStart=Math.min(this.m_originalStart,t),this.m_modifiedStart=Math.min(this.m_modifiedStart,e),this.m_modifiedCount++},t.prototype.getChanges=function(){return(this.m_originalCount>0||this.m_modifiedCount>0)&&this.MarkNextChange(),this.m_changes},t.prototype.getReverseChanges=function(){return(this.m_originalCount>0||this.m_modifiedCount>0)&&this.MarkNextChange(),this.m_changes.reverse(),this.m_changes},t}(),h=function(){function t(t,e,i){void 0===i&&(i=null),this.OriginalSequence=t,this.ModifiedSequence=e,this.ContinueProcessingPredicate=i,this.m_forwardHistory=[],this.m_reverseHistory=[]}return t.prototype.ElementsAreEqual=function(t,e){return this.OriginalSequence.getElementAtIndex(t)===this.ModifiedSequence.getElementAtIndex(e)},t.prototype.OriginalElementsAreEqual=function(t,e){return this.OriginalSequence.getElementAtIndex(t)===this.OriginalSequence.getElementAtIndex(e)},t.prototype.ModifiedElementsAreEqual=function(t,e){return this.ModifiedSequence.getElementAtIndex(t)===this.ModifiedSequence.getElementAtIndex(e)},t.prototype.ComputeDiff=function(t){return this._ComputeDiff(0,this.OriginalSequence.getLength()-1,0,this.ModifiedSequence.getLength()-1,t)},t.prototype._ComputeDiff=function(t,e,i,n,r){var o=this.ComputeDiffRecursive(t,e,i,n,[!1]);return r?this.ShiftChanges(o):o},t.prototype.ComputeDiffRecursive=function(t,e,i,r,a){for(a[0]=!1;t<=e&&i<=r&&this.ElementsAreEqual(t,i);)t++,i++;for(;e>=t&&r>=i&&this.ElementsAreEqual(e,r);)e--,r--;if(t>e||i>r){var s=void 0;return i<=r?(o.Assert(t===e+1,"originalStart should only be one more than originalEnd"),s=[new n(t,0,i,r-i+1)]):t<=e?(o.Assert(i===r+1,"modifiedStart should only be one more than modifiedEnd"),s=[new n(t,e-t+1,i,0)]):(o.Assert(t===e+1,"originalStart should only be one more than originalEnd"),o.Assert(i===r+1,"modifiedStart should only be one more than modifiedEnd"),s=[]),s}var h=[0],d=[0],l=this.ComputeRecursionPoint(t,e,i,r,h,d,a),g=h[0],u=d[0];if(null!==l)return l;if(!a[0]){var f=this.ComputeDiffRecursive(t,g,i,u,a),m=[];return m=a[0]?[new n(g+1,e-(g+1)+1,u+1,r-(u+1)+1)]:this.ComputeDiffRecursive(g+1,e,u+1,r,a),this.ConcatenateChanges(f,m)}return[new n(t,e-t+1,i,r-i+1)]},t.prototype.WALKTRACE=function(t,e,i,r,o,a,h,d,l,g,u,f,m,c,p,S,y,_){var C,A,E=null,L=new s,v=e,M=i,b=m[0]-S[0]-r,w=Number.MIN_VALUE,O=this.m_forwardHistory.length-1;do{(A=b+t)===v||A<M&&l[A-1]<l[A+1]?(c=(u=l[A+1])-b-r,u<w&&L.MarkNextChange(),w=u,L.AddModifiedElement(u+1,c),b=A+1-t):(c=(u=l[A-1]+1)-b-r,u<w&&L.MarkNextChange(),w=u-1,L.AddOriginalElement(u,c+1),b=A-1-t),O>=0&&(t=(l=this.m_forwardHistory[O])[0],v=1,M=l.length-1)}while(--O>=-1);if(C=L.getReverseChanges(),_[0]){var q=m[0]+1,x=S[0]+1;if(null!==C&&C.length>0){var I=C[C.length-1];q=Math.max(q,I.getOriginalEnd()),x=Math.max(x,I.getModifiedEnd())}E=[new n(q,f-q+1,x,p-x+1)]}else{L=new s,v=a,M=h,b=m[0]-S[0]-d,w=Number.MAX_VALUE,O=y?this.m_reverseHistory.length-1:this.m_reverseHistory.length-2;do{(A=b+o)===v||A<M&&g[A-1]>=g[A+1]?(c=(u=g[A+1]-1)-b-d,u>w&&L.MarkNextChange(),w=u+1,L.AddOriginalElement(u+1,c+1),b=A+1-o):(c=(u=g[A-1])-b-d,u>w&&L.MarkNextChange(),w=u,L.AddModifiedElement(u+1,c+1),b=A-1-o),O>=0&&(o=(g=this.m_reverseHistory[O])[0],v=1,M=g.length-1)}while(--O>=-1);E=L.getChanges()}return this.ConcatenateChanges(C,E)},t.prototype.ComputeRecursionPoint=function(t,e,i,r,o,s,h){var d,l,g,u=0,f=0,m=0,c=0;t--,i--,o[0]=0,s[0]=0,this.m_forwardHistory=[],this.m_reverseHistory=[];var p,S,y=e-t+(r-i),_=y+1,C=new Array(_),A=new Array(_),E=r-i,L=e-t,v=t-i,M=e-r,b=(L-E)%2==0;for(C[E]=t,A[L]=e,h[0]=!1,g=1;g<=y/2+1;g++){var w=0,O=0;for(u=this.ClipDiagonalBound(E-g,g,E,_),f=this.ClipDiagonalBound(E+g,g,E,_),p=u;p<=f;p+=2){for(l=(d=p===u||p<f&&C[p-1]<C[p+1]?C[p+1]:C[p-1]+1)-(p-E)-v,S=d;d<e&&l<r&&this.ElementsAreEqual(d+1,l+1);)d++,l++;if(C[p]=d,d+l>w+O&&(w=d,O=l),!b&&Math.abs(p-L)<=g-1&&d>=A[p])return o[0]=d,s[0]=l,S<=A[p]&&g<=1448?this.WALKTRACE(E,u,f,v,L,m,c,M,C,A,d,e,o,l,r,s,b,h):null}var q=(w-t+(O-i)-g)/2;if(null!==this.ContinueProcessingPredicate&&!this.ContinueProcessingPredicate(w,this.OriginalSequence,q))return h[0]=!0,o[0]=w,s[0]=O,q>0&&g<=1448?this.WALKTRACE(E,u,f,v,L,m,c,M,C,A,d,e,o,l,r,s,b,h):(t++,i++,[new n(t,e-t+1,i,r-i+1)]);for(m=this.ClipDiagonalBound(L-g,g,L,_),c=this.ClipDiagonalBound(L+g,g,L,_),p=m;p<=c;p+=2){for(l=(d=p===m||p<c&&A[p-1]>=A[p+1]?A[p+1]-1:A[p-1])-(p-L)-M,S=d;d>t&&l>i&&this.ElementsAreEqual(d,l);)d--,l--;if(A[p]=d,b&&Math.abs(p-E)<=g&&d<=C[p])return o[0]=d,s[0]=l,S>=C[p]&&g<=1448?this.WALKTRACE(E,u,f,v,L,m,c,M,C,A,d,e,o,l,r,s,b,h):null}if(g<=1447){var x=new Array(f-u+2);x[0]=E-u+1,a.Copy(C,u,x,1,f-u+1),this.m_forwardHistory.push(x),(x=new Array(c-m+2))[0]=L-m+1,a.Copy(A,m,x,1,c-m+1),this.m_reverseHistory.push(x)}}return this.WALKTRACE(E,u,f,v,L,m,c,M,C,A,d,e,o,l,r,s,b,h)},t.prototype.ShiftChanges=function(t){var e;do{e=!1;for(var i=0;i<t.length;i++)for(var n=t[i],r=i<t.length-1?t[i+1].originalStart:this.OriginalSequence.getLength(),o=i<t.length-1?t[i+1].modifiedStart:this.ModifiedSequence.getLength(),a=n.originalLength>0,s=n.modifiedLength>0;n.originalStart+n.originalLength<r&&n.modifiedStart+n.modifiedLength<o&&(!a||this.OriginalElementsAreEqual(n.originalStart,n.originalStart+n.originalLength))&&(!s||this.ModifiedElementsAreEqual(n.modifiedStart,n.modifiedStart+n.modifiedLength));)n.originalStart++,n.modifiedStart++;var h=new Array,d=[null];for(i=0;i<t.length;i++)i<t.length-1&&this.ChangesOverlap(t[i],t[i+1],d)?(e=!0,h.push(d[0]),i++):h.push(t[i]);t=h}while(e);for(i=t.length-1;i>=0;i--){n=t[i],r=0,o=0;if(i>0){var l=t[i-1];l.originalLength>0&&(r=l.originalStart+l.originalLength),l.modifiedLength>0&&(o=l.modifiedStart+l.modifiedLength)}a=n.originalLength>0,s=n.modifiedLength>0;for(var g=0,u=this._boundaryScore(n.originalStart,n.originalLength,n.modifiedStart,n.modifiedLength),f=1;;f++){var m=n.originalStart-f,c=n.modifiedStart-f;if(m<r||c<o)break;if(a&&!this.OriginalElementsAreEqual(m,m+n.originalLength))break;if(s&&!this.ModifiedElementsAreEqual(c,c+n.modifiedLength))break;var p=this._boundaryScore(m,n.originalLength,c,n.modifiedLength);p>u&&(u=p,g=f)}n.originalStart-=g,n.modifiedStart-=g}return t},t.prototype._OriginalIsBoundary=function(t){if(t<=0||t>=this.OriginalSequence.getLength()-1)return!0;var e=this.OriginalSequence.getElementAtIndex(t);return"string"==typeof e&&/^\s*$/.test(e)},t.prototype._OriginalRegionIsBoundary=function(t,e){if(this._OriginalIsBoundary(t)||this._OriginalIsBoundary(t-1))return!0;if(e>0){var i=t+e;if(this._OriginalIsBoundary(i-1)||this._OriginalIsBoundary(i))return!0}return!1},t.prototype._ModifiedIsBoundary=function(t){if(t<=0||t>=this.ModifiedSequence.getLength()-1)return!0;var e=this.ModifiedSequence.getElementAtIndex(t);return"string"==typeof e&&/^\s*$/.test(e)},t.prototype._ModifiedRegionIsBoundary=function(t,e){if(this._ModifiedIsBoundary(t)||this._ModifiedIsBoundary(t-1))return!0;if(e>0){var i=t+e;if(this._ModifiedIsBoundary(i-1)||this._ModifiedIsBoundary(i))return!0}return!1},t.prototype._boundaryScore=function(t,e,i,n){return(this._OriginalRegionIsBoundary(t,e)?1:0)+(this._ModifiedRegionIsBoundary(i,n)?1:0)},t.prototype.ConcatenateChanges=function(t,e){var i=[],n=null;return 0===t.length||0===e.length?e.length>0?e:t:this.ChangesOverlap(t[t.length-1],e[0],i)?(n=new Array(t.length+e.length-1),a.Copy(t,0,n,0,t.length-1),n[t.length-1]=i[0],a.Copy(e,1,n,t.length,e.length-1),n):(n=new Array(t.length+e.length),a.Copy(t,0,n,0,t.length),a.Copy(e,0,n,t.length,e.length),n)},t.prototype.ChangesOverlap=function(t,e,i){if(o.Assert(t.originalStart<=e.originalStart,"Left change is not less than or equal to right change"),o.Assert(t.modifiedStart<=e.modifiedStart,"Left change is not less than or equal to right change"),t.originalStart+t.originalLength>=e.originalStart||t.modifiedStart+t.modifiedLength>=e.modifiedStart){var r=t.originalStart,a=t.originalLength,s=t.modifiedStart,h=t.modifiedLength;return t.originalStart+t.originalLength>=e.originalStart&&(a=e.originalStart+e.originalLength-t.originalStart),t.modifiedStart+t.modifiedLength>=e.modifiedStart&&(h=e.modifiedStart+e.modifiedLength-t.modifiedStart),i[0]=new n(r,a,s,h),!0}return i[0]=null,!1},t.prototype.ClipDiagonalBound=function(t,e,i,n){if(t>=0&&t<n)return t;var r=e%2==0;return t<0?r===(i%2==0)?0:1:r===((n-i-1)%2==0)?n-1:n-2},t}();e.LcsDiff=h},"./src/app/utils/monaco-index-converter.js":function(t,e,i){"use strict";function n(t,e,i){let n=0,r=0;for(;n+1<e;)r+=t[n].length,r+=1,n+=1;return r+=i-1,r}function r(t,e){let i=0;for(let n=0;n<t.length;n++){const r=t[n];if(i+r.length+1>e)return{lineNumber:n+1,column:e-i+1};i+=r.length+1}return{lineNumber:t.length,column:(t[t.length-1]||"").length+1}}i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=default~app~monaco-editor.1fb033d08.chunk.js.map
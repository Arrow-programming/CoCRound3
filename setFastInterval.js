// since setInterval is so slow, this replaces Date.now and someother nasty stuff to make a nice reusable group of functions. I recieved a lot of help from the internet making this, and by no means is it the best implementation, but it does the trick
(() => {
    /** 
        Created by Arrow
        https://www.khanacademy.org/profile/Arrow.programming
    **/
    //performance.now() is faster than Date.now()
    if (typeof performance === 'undefined' || !performance.now) {
        //fallback
        globalThis.performance = globalThis.performance || { 
            now: () => Date.now() 
        };
    }
    
      //MessageChannel microtask-style scheduler for near-zero delays (faster than setTimeout(0))
    const mc = typeof MessageChannel !== 'undefined' ? new MessageChannel() : null;
    const _immediateQueue = new Map();
    let _immediateId = 1;
    if (mc) {
        mc.port1.onmessage = (e) => {
            const id = e.data;
            const fn = _immediateQueue.get(id);
            if (fn) {
                _immediateQueue.delete(id);
                try { 
                    fn(); 
                } catch (err) { 
                    setTimeout(() => { 
                        throw err; 
                    }, 0); 
                }
            }
        };
    }
    function postImmediate(fn) {
        if (!mc) {
            //no MessageChannel available fallback
            return setTimeout(fn, 0);
        }
        const id = _immediateId++;
        _immediateQueue.set(id, fn);
        mc.port2.postMessage(id);
        return id;
    }
    
    //internal registry so we can clear by id like clearInterval
    const timers = new Map();
    let nextTimerId = 1;
    
    //setFastInterval: returns numeric id (like setInterval). Use clearFastInterval(id) to stop.
    function setFastInterval(fn, intervalMs, options = {}) {
        if (typeof fn !== 'function'){ 
            throw new TypeError('callback must be a function');
        }
        intervalMs = Number(intervalMs) || 0;
        
        const id = nextTimerId++;
        let expected = performance.now() + intervalMs;
        let stopped = false;
        let pendingHandle = null;
        
        //not the best implementation, but oh well lol
        function scheduleNext(delay) {
            if (stopped){ 
                return;
            }
            if (delay <= 1) {
                //near-zero delay 
                pendingHandle = postImmediate(step);
                timers.set(id, { stop: () => { 
                    /* cannot cancel MessageChannel post; leave fn guard */ 
                    
                } });
            } 
            else {
                pendingHandle = setTimeout(step, delay);
                timers.set(id, { 
                    stop: () => clearTimeout(pendingHandle) 
                });
            }
        }
    
        function step() {
            if (stopped) {
                return;
            }
            
            const now = performance.now();
            const drift = now - expected;
            
            //run callback again :P
            try { 
                fn(); 
            } 
            catch (err) {
                //Don't break the timer on user errors lol
                setTimeout(() => { throw err; }, 0);
            }
            
            //compute next expected time and the delay to schedule
            expected += intervalMs;
            
            //If the drift is huge (like tab is suspended in chrome or edge i think edge has that?), skip missed intervals by catching up
            if (drift > intervalMs * 5) {
                //If drift is extremely large, reset expected to now + interval to avoid long backlog loops
                expected = now + intervalMs;
            }
            
            const nextDelay = Math.max(0, intervalMs - Math.max(0, drift));
            scheduleNext(nextDelay);
        }
            
        //intiaite
        scheduleNext(intervalMs);
            
        timers.set(id, {
            stop: () => {
                stopped = true;
            
                //cleanup for pending handle if it's a timeout
                try { 
                    clearTimeout(pendingHandle); 
                } catch (_) {}
            
                _immediateQueue.forEach((fn, k) => {
                    if (fn === step) { 
                        _immediateQueue.delete(k);
                    }
                });
                
                timers.delete(id);
            }
        });
            
        return id;
    }
    
    function clearFastInterval(id) {
        const t = timers.get(id);
        if (!t) {
            return; 
        }
        t.stop();
    }
        
    //make this global
    if (typeof globalThis !== 'undefined') {
        globalThis.setFastInterval = setFastInterval;
        globalThis.clearFastInterval = clearFastInterval;
    } 
    else if (typeof window !== 'undefined') {
        window.setFastInterval = setFastInterval;
        window.clearFastInterval = clearFastInterval;
    } 
    else if (typeof self !== 'undefined') {
        self.setFastInterval = setFastInterval;
        self.clearFastInterval = clearFastInterval;
    } 
    else {
        //and export!
        try { 
            module.exports = { 
                setFastInterval, 
                clearFastInterval 
            }; 
        } catch (_) {}
    } 
})();

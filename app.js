// ===== CONFIGURATION =====
let GAS_URL = localStorage.getItem('gasUrl') || '';

// ===== DATA =====
const AREAS_TURBINE = {
    "Steam Inlet Turbine": [
        "MPS Inlet 30-TP-6101 PI-6114 (kg/cm2)",
        "MPS Inlet 30-TP-6101 TI-6153 (°C)",
        "MPS Inlet 30-TP-6101 PI-6116 (kg/cm2)",
        "LPS Extrac 30-TP-6101 PI-6123 (kg/cm2)",
        "Gland Steam TI-6156 (°C)",
        "MPS Inlet 30-TP-6101 PI-6108 (Kg/cm2)",
        "Exhaust Steam PI-6111 (kg/cm2)",
        "Gland Steam PI-6118 (Kg/cm2)"
    ],
    "Low Pressure Steam": [
        "LPS from U-6101 PI-6104 (kg/cm2)",
        "LPS from U-6101 TI-6102 (°C)",
        "LPS Header PI-6106 (Kg/cm2)",
        "LPS Header TI-6107 (°C)"
    ],
    "Lube Oil": [
        "Lube Oil 30-TK-6102 LI-6104 (%)",
        "Lube Oil 30-TK-6102 TI-6125 (°C)",
        "Lube Oil 30-C-6101 (On/Off)",
        "Lube Oil 30-EH-6102 (On/Off)",
        "Lube Oil Cartridge FI-6143 (%)",
        "Lube Oil Cartridge PI-6148 (mmH2O)",
        "Lube Oil Cartridge PI-6149 (mmH2O)",
        "Lube Oil PI-6145 (kg/cm2)",
        "Lube Oil E-6104 (A/B)",
        "Lube Oil TI-6127 (°C)",
        "Lube Oil FIL-6101 (A/B)",
        "Lube Oil PDI-6146 (Kg/cm2)",
        "Lube Oil PI-6143 (Kg/cm2)",
        "Lube Oil TI-6144 (°C)",
        "Lube Oil TI-6146 (°C)",
        "Lube Oil TI-6145 (°C)",
        "Lube Oil FG-6144 (%)",
        "Lube Oil FG-6146 (%)",
        "Lube Oil TI-6121 (°C)",
        "Lube Oil TI-6116 (°C)",
        "Lube Oil FG-6121 (%)",
        "Lube Oil FG-6116 (%)"
    ],
    "Control Oil": [
        "Control Oil 30-TK-6103 LI-6106 (%)",
        "Control Oil 30-TK-6103 TI-6128 (°C)",
        "Control Oil P-6106 (A/B)",
        "Control Oil FIL-6103 (A/B)",
        "Control Oil PI-6152 (Bar)"
    ],
    "Shaft Line": [
        "Jacking Oil 30-P-6105 PI-6158 (Bar)",
        "Jacking Oil 30-P-6105 PI-6161 (Bar)",
        "Electrical Turning Gear U-6103 (Remote/Running/Stop)",
        "EH-6101 (ON/OFF)"
    ],
    "Condenser 30-E-6102": [
        "LG-6102 (%)",
        "30-P-6101 (A/B)",
        "30-P-6101 Press Suction",
        "30-P-6101 Press Discharge",
        "30-P-6101 Load (amp)"
    ],
    "Ejector": [
        "J-6101 PI-6126 A (Kg/cm2)",
        "J-6101 PI-6127 B (Kg/cm2)",
        "J-6102 PI-6128 A (Kg/cm2)",
        "J-6102 PI-6129 B (Kg/cm2)",
        "J-6104 PI-6131 (Kg/cm2)",
        "J-6104 PI-6138 (Kg/cm2)",
        "PI-6172 (kg/cm2)",
        "LPS Extrac 30-TP-6101 TI-6155 (°C)",
        "from U-6102 TI-6104 (°C)"
    ],
    "Generator Cooling Water": [
        "Air Cooler PI-6124 A (Kg/cm2)",
        "Air Cooler PI-6124 B (Kg/cm2)",
        "Air Cooler TI-6113 A (°C)",
        "Air Cooler TI-6113 B (°C)",
        "Air Cooler PI-6125 A (Kg/cm2)",
        "Air Cooler PI-6125 B (Kg/cm2)",
        "Air Cooler TI-6114 A (°C)",
        "Air Cooler TI-6114 B (°C)"
    ],
    "Condenser Cooling Water": [
        "Condenser PI-6135 A (Kg/cm2)",
        "Condenser PI-6135 B (Kg/cm2)",
        "Condenser TI-6118 A (°C)",
        "Condenser TI-6118 B (°C)",
        "Condenser PI-6136 A (Kg/cm2)",
        "Condenser PI-6136 B (Kg/cm2)",
        "Condenser TI-6119 A (°C)",
        "Condenser TI-6119 B (°C)"
    ],
    "BFW System": [
        "Condensate Tank TK-6201 (%)",
        "Condensate Tank TI-6216 (°C)",
        "P-6202 (A/B)",
        "P-6202 Press Suction",
        "P-6202 Press Discharge",
        "P-6202 Load (amp)",
        "30-C-6202 A (ON/OFF)",
        "30-C-6202 A (Ampere)",
        "30-C-6202 B (ON/OFF)",
        "30-C-6202 B (Ampere)",
        "30-C-6202 PCV-6216 (%)",
        "30-C-6202 PI-6107 (kg/cm2)",
        "Condensate Drum 30-D-6201 LI-6209 (%)",
        "Condensate Drum 30-D-6201 PI-6218 (kg/cm2)",
        "Condensate Drum 30-D-6201 TI-6215 (°C)",
        "Deaerator LI-6202 (%)",
        "Deaerator TI-6201 (°C)",
        "30-P-6201 (A/B)",
        "30-P-6201 Press Suction",
        "30-P-6201 Press Discharge",
        "30-P-6201 Load (amp)"
    ],
    "Chemical Dosing": [
        "30-TK-6205 LI-6204 (%)",
        "30-TK-6205 30-P-6205 (A/B)",
        "30-TK-6205 Press Disch (kg/cm2)",
        "30-TK-6205 Stroke (%)",
        "30-TK-6206 LI-6206 (%)",
        "30-TK-6206 30-P-6206 (A/B)",
        "30-TK-6206 Press Disch (kg/cm2)",
        "30-TK-6206 Stroke (%)",
        "30-TK-6207 LI-6208 (%)",
        "30-TK-6207 30-P-6207 (A/B)",
        "30-TK-6207 Press Disch (kg/cm2)",
        "30-TK-6207 Stroke (%)"
    ]
};

const AREAS_CT = {
    "BASIN SA": [
        "D-6511 LEVEL BASIN",
        "D-6511 BLOWDOWN",
        "D-6511 PH BASIN",
        "D-6511 TRASSAR (A/M)",
        "TK-6511 LEVEL ACID",
        "FIL-6511 (A/B)",
        "30-P-6511 A PRESS (kg/cm2)",
        "30-P-6511 B PRESS (kg/cm2)",
        "30-P-6511 C PRESS (kg/cm2)",
        "MT-6511 A STATUS",
        "MT-6511 B STATUS",
        "MT-6511 C STATUS",
        "MT-6511 D STATUS"
    ],
    "BASIN SU": [
        "D-6521 LEVEL BASIN",
        "D-6521 BLOWDOWN",
        "D-6521 PH BASIN",
        "D-6521 TRASSAR (A/M)",
        "TK-6521 LEVEL ACID",
        "FIL-6521 (A/B)",
        "30-P-6521 A PRESS (kg/cm2)",
        "30-P-6521 B PRESS (kg/cm2)",
        "30-P-6521 C PRESS (kg/cm2)",
        "MT-6521 A STATUS",
        "MT-6521 B STATUS",
        "MT-6521 C STATUS",
        "MT-6521 D STATUS"
    ],
    "LH & TH": [
        "LH C-6701 A",
        "LH C-6701 B",
        "LH C-6702 A",
        "LH C-6702 B",
        "TH C-6701 A",
        "TH C-6701 B",
        "TH C-6702 A",
        "TH C-6702 B"
    ],
    "COMPRESSOR": [
        "C-6701 A STATUS",
        "C-6701 A PRESSURE",
        "C-6701 A TEMP",
        "C-6701 A FLOW",
        "C-6701 B STATUS",
        "C-6701 B PRESSURE",
        "C-6701 B TEMP",
        "C-6701 B FLOW",
        "C-6702 A STATUS",
        "C-6702 A PRESSURE",
        "C-6702 A TEMP",
        "C-6702 A FLOW",
        "C-6702 B STATUS",
        "C-6702 B PRESSURE",
        "C-6702 B TEMP",
        "C-6702 B FLOW"
    ]
};

const AREAS_OLI = {
    "OLI GEARBOX SA": ["MT-6511 A", "MT-6511 B", "MT-6511 C", "MT-6511 D"],
    "OLI GEARBOX SU": ["MT-6521 B", "MT-6521 C", "MT-6521 D"]
};

// ===== STATE =====
let currentState = {
    mode: null,
    area: null,
    index: 0,
    data: {},
    currentParams: []
};

// ===== INIT =====
window.onload = function() {
    if (GAS_URL) {
        document.getElementById('gasUrlInput').value = GAS_URL;
        document.getElementById('configCard').style.display = 'none';
    }
    
    initAreas();
    generateTpmId();
    checkOnlineStatus();
    updatePendingSyncUI();
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registered'))
            .catch(err => console.log('SW error:', err));
    }
};

// ===== CONFIG =====
function saveConfig() {
    const url = document.getElementById('gasUrlInput').value.trim();
    if (!url || !url.includes('script.google.com')) {
        showToast('URL tidak valid!', 'error');
        return;
    }
    localStorage.setItem('gasUrl', url);
    GAS_URL = url;
    location.reload();
}

async function testConnection() {
    const url = document.getElementById('gasUrlInput').value.trim();
    if (!url) {
        showToast('Masukkan URL dulu!', 'warning');
        return;
    }
    
    document.getElementById('loading').classList.add('active');
    
    try {
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ test: true })
        });
        
        document.getElementById('loading').classList.remove('active');
        showToast('✅ Koneksi OK! (Mode no-cors)', 'success');
    } catch (err) {
        document.getElementById('loading').classList.remove('active');
        showToast('❌ Gagal: ' + err.message, 'error');
    }
}

// ===== NAVIGATION =====
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    if (sectionId === 'menuSection') {
        document.querySelector('.nav-item:nth-child(1)').classList.add('active');
        updatePendingSyncUI();
    } else if (sectionId === 'tpmSection') {
        document.querySelector('.nav-item:nth-child(2)').classList.add('active');
    } else if (sectionId === 'dashboardSection') {
        document.querySelector('.nav-item:nth-child(3)').classList.add('active');
    }
    
    window.scrollTo(0, 0);
}

// ===== AREAS =====
function initAreas() {
    renderAreaList('turbineAreas', AREAS_TURBINE, 'TURBINE');
    renderAreaList('ctAreas', AREAS_CT, 'CT');
    renderAreaList('oliAreas', AREAS_OLI, 'OLI');
}

function renderAreaList(containerId, areas, mode) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    Object.keys(areas).forEach(area => {
        const div = document.createElement('div');
        div.className = 'area-item';
        div.innerHTML = `
            <span>${area}</span>
            <span style="color: var(--text-muted); font-size: 0.875rem;">
                ${areas[area].length} params
            </span>
        `;
        div.onclick = () => selectArea(mode, area, areas[area]);
        container.appendChild(div);
    });
}

function selectArea(mode, area, params) {
    currentState = {
        mode: mode,
        area: area,
        index: 0,
        data: {},
        currentParams: params
    };
    
    document.getElementById('inputTitle').textContent = 
        mode === 'TURBINE' ? '⚙️ Turbine' : mode === 'CT' ? '🌀 CT' : '🛢️ Oli';
    document.getElementById('inputSubtitle').textContent = `Area: ${area}`;
    
    updateProgress();
    showParameter();
    showSection('inputSection');
}

// ===== PARAMETER INPUT =====
function showParameter() {
    const param = currentState.currentParams[currentState.index];
    const prevData = getPreviousValue(param);
    
    document.getElementById('paramName').textContent = param;
    document.getElementById('paramCounter').textContent = 
        `Parameter ${currentState.index + 1}/${currentState.currentParams.length}`;
    
    const unitMatch = param.match(/\(([^)]+)\)$/);
    document.getElementById('paramUnit').textContent = unitMatch ? unitMatch[1] : '-';
    
    document.getElementById('paramPrev').textContent = 
        prevData ? `Data sebelumnya: ${prevData}` : 'Data sebelumnya: -';
    
    document.getElementById('paramInput').value = currentState.data[param] || '';
    
    const quickActions = document.getElementById('quickActions');
    if (param.includes('(On/Off)') || param.includes('(A/B)') || param.includes('STATUS')) {
        quickActions.style.display = 'flex';
    } else {
        quickActions.style.display = 'none';
    }
    
    updateProgress();
}

function setQuickValue(val) {
    document.getElementById('paramInput').value = val;
}

function nextParameter() {
    const param = currentState.currentParams[currentState.index];
    const value = document.getElementById('paramInput').value.trim();
    
    if (!value) {
        showToast('Silakan isi nilai parameter', 'warning');
        return;
    }
    
    currentState.data[param] = value;
    currentState.index++;
    
    if (currentState.index >= currentState.currentParams.length) {
        saveLogsheet();
    } else {
        showParameter();
    }
}

function prevParameter() {
    if (currentState.index > 0) {
        currentState.index--;
        showParameter();
    } else {
        showSection(currentState.mode === 'TURBINE' ? 'turbineSection' : 
                   currentState.mode === 'CT' ? 'ctSection' : 'oliSection');
    }
}

function updateProgress() {
    const progress = ((currentState.index / currentState.currentParams.length) * 100).toFixed(0);
    const progressBar = currentState.mode === 'TURBINE' ? 'turbineProgress' : 
                       currentState.mode === 'CT' ? 'ctProgress' : null;
    if (progressBar) {
        document.getElementById(progressBar).style.width = progress + '%';
    }
}

// ===== SAVE FUNCTIONS =====
async function saveLogsheet() {
    const payload = {
        Timestamp: new Date().toISOString(),
        Mode: currentState.mode,
        Area: currentState.area,
        ...currentState.data
    };
    
    document.getElementById('loading').classList.add('active');
    
    try {
        await fetch(GAS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        document.getElementById('loading').classList.remove('active');
        showToast('✅ Data tersimpan!', 'success');
        showSection('menuSection');
        
    } catch (err) {
        document.getElementById('loading').classList.remove('active');
        showToast('❌ Error: ' + err.message, 'error');
    }
}

function saveLaporan() {
    const shift = document.getElementById('shiftSelect').value;
    const area = document.getElementById('areaLaporan').value;
    const detail = document.getElementById('detailLaporan').value;
    
    if (!detail.trim()) {
        showToast('Silakan isi detail pekerjaan', 'warning');
        return;
    }
    
    const payload = {
        Timestamp: new Date().toISOString(),
        Type: 'LAPORAN',
        Shift: shift,
        Area: area,
        Detail: detail
    };
    
    sendToSheet(payload, '✅ Laporan tersimpan!');
    document.getElementById('detailLaporan').value = '';
}

function submitAnomali() {
    const id = document.getElementById('tpmId').value;
    const desc = document.getElementById('tpmDesc').value;
    
    if (!desc.trim()) {
        showToast('Silakan isi keterangan temuan', 'warning');
        return;
    }
    
    const payload = {
        Timestamp: new Date().toISOString(),
        Type: 'ANOMALI',
        ID: id,
        Description: desc,
        Status: 'OPEN'
    };
    
    sendToSheet(payload, '🚨 Anomali dilaporkan!');
    
    document.getElementById('tpmDesc').value = '';
    document.getElementById('tpmPhoto').value = '';
    document.getElementById('photoPreview').style.display = 'none';
    generateTpmId();
}

async function sendToSheet(payload, successMsg) {
    if (!GAS_URL) {
        showToast('URL belum dikonfigurasi!', 'error');
        return;
    }
    
    document.getElementById('loading').classList.add('active');
    
    try {
        await fetch(GAS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        document.getElementById('loading').classList.remove('active');
        showToast(successMsg, 'success');
        
    } catch (err) {
        document.getElementById('loading').classList.remove('active');
        showToast('❌ Error: ' + err.message, 'error');
    }
}

// ===== UTILITIES =====
function generateTpmId() {
    const now = new Date();
    const id = 'BOT-' + now.toTimeString().slice(0,8).replace(/:/g,'');
    document.getElementById('tpmId').value = id;
}

function getPreviousValue(param) {
    // Simplified - bisa dikembangkan dengan localStorage
    return null;
}

function previewPhoto(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.getElementById('photoPreview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function showRekap(type) {
    showToast('Fitur rekap ' + type + ' (bisa dikembangkan)', 'success');
}

function refreshDashboard() {
    // Simplified - bisa dikembangkan
    document.getElementById('ticketList').innerHTML = '<p style="text-align: center; color: var(--text-muted);">Tidak ada tiket aktif</p>';
}

function updatePendingSyncUI() {
    // Simplified
    document.getElementById('pendingSyncCard').style.display = 'none';
}

function forceSync() {
    showToast('Sinkronisasi...', 'success');
}

function checkOnlineStatus() {
    const banner = document.getElementById('offlineBanner');
    const status = document.getElementById('syncStatus');
    
    if (!navigator.onLine) {
        banner.classList.add('show');
        status.className = 'sync-status offline';
        document.getElementById('syncIcon').textContent = '📴';
        document.getElementById('syncText').textContent = 'Offline';
    } else {
        status.className = 'sync-status online';
        document.getElementById('syncIcon').textContent = '🟢';
        document.getElementById('syncText').textContent = 'Online';
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toastIcon');
    const msg = document.getElementById('toastMessage');
    
    toast.className = 'toast ' + type;
    icon.textContent = type === 'success' ? '✓' : type === 'error' ? '✕' : '⚠';
    msg.textContent = message;
    
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

window.addEventListener('online', () => {
    document.getElementById('offlineBanner').classList.remove('show');
    checkOnlineStatus();
});

window.addEventListener('offline', () => {
    document.getElementById('offlineBanner').classList.add('show');
    checkOnlineStatus();
});

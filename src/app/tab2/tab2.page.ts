import { Component } from '@angular/core';
import { VaultService, VaultServiceState } from '../vault/vault.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public state: VaultServiceState;

  constructor(private vaultService: VaultService) {
    this.state = vaultService.state;
  }

  async setSession(data: string) {
    await this.vaultService.setSession(data);
  }

  async restoreSession() {
    await this.vaultService.restoreSession();
  }

  lockVault() {
    this.vaultService.lockVault();
  }
  
  unlockVault() {
    this.vaultService.unlockVault();
  }

  setPrivacyScreen() {
    this.vaultService.setPrivacyScreen(this.state.privacyScreen);
  }

  setLockType() {
    this.vaultService.setLockType();
  }

  clearVault() {
    this.vaultService.clearVault();
  }

}

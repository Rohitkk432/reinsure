export type Insurance = {
  version: '0.1.0';
  name: 'insurance';
  constants: [
    {
      name: 'AUTHORIZED_PUBLIC_KEY';
      type: 'publicKey';
      value: 'pubkey ! ("55kBY9yxqSC42boV8PywT2gqGzgLi5MPAtifNRgPNezF")';
    },
    {
      name: 'MINUTE';
      type: 'i64';
      value: '60';
    },
    {
      name: 'HOUR';
      type: 'i64';
      value: '60 * MINUTE';
    },
    {
      name: 'DAY';
      type: 'i64';
      value: '24 * HOUR';
    },
    {
      name: 'WEEK';
      type: 'i64';
      value: '7 * DAY';
    },
    {
      name: 'TWO_WEEKS';
      type: 'i64';
      value: '2 * WEEK';
    },
    {
      name: 'MONTH';
      type: 'i64';
      value: '30 * DAY';
    },
    {
      name: 'DEFAULT_MINT_DECIMALS';
      type: 'u8';
      value: '6';
    }
  ];
  instructions: [
    {
      name: 'registerInsurer';
      accounts: [
        {
          name: 'insuranceCreator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'insurer';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'verifyingDocuments';
          type: 'string';
        }
      ];
    },
    {
      name: 'registerLp';
      accounts: [
        {
          name: 'lpCreator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'registerInsurance';
      accounts: [
        {
          name: 'insuranceCreator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'insurer';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'insurance';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'insuranceId';
          type: 'string';
        },
        {
          name: 'coverage';
          type: 'u64';
        },
        {
          name: 'premium';
          type: 'u64';
        },
        {
          name: 'minimumCommission';
          type: 'u32';
        },
        {
          name: 'deductible';
          type: 'u64';
        },
        {
          name: 'expiry';
          type: 'i64';
        },
        {
          name: 'metadataLink';
          type: 'string';
        }
      ];
    },
    {
      name: 'acceptReinsuranceProposal';
      accounts: [
        {
          name: 'insuranceCreator';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'insurance';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'addSecurity';
      accounts: [
        {
          name: 'lpCreator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'lpCreatorUsdcAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'lpUsdcAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'usdcMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'transferAmount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'acceptStrategy';
      accounts: [
        {
          name: 'strategyAccepter';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenisedMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'insurance';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'premiumVault';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposedStrategy';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'blockStrategy';
      accounts: [
        {
          name: 'authorisedAddress';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'proposedStrategy';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'callOffReinsurance';
      accounts: [
        {
          name: 'lpCreator';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'lpUsdcAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'insurance';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'premiumVault';
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: 'premiumVaultTokenAccount';
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: 'usdcMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'claimDecision';
      accounts: [
        {
          name: 'decisionAsker';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'claimVotingReward';
      accounts: [
        {
          name: 'voter';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'voterTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'claimTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'claimVoteAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'usdcMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'rewardAmount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'executeStrategy';
      accounts: [
        {
          name: 'executor';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'proposal';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'insurance';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'premiumVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'premiumVaultTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposedStrategy';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'strategyProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'executorAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'usdcMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'payPremium';
      accounts: [
        {
          name: 'insuranceCreator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'insuranceCreatorTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'insurance';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'premiumVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'premiumVaultTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'usdcMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'premiumMultiplier';
          type: 'u64';
        }
      ];
    },
    {
      name: 'proposeStrategy';
      accounts: [
        {
          name: 'strategyProposer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'premiumVault';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposedStrategy';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'strategyProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'strategyId';
          type: 'string';
        },
        {
          name: 'streamPayment';
          type: 'u64';
        },
        {
          name: 'streamEvery';
          type: 'u64';
        },
        {
          name: 'numberOfStreams';
          type: 'u64';
        }
      ];
    },
    {
      name: 'raiseClaim';
      accounts: [
        {
          name: 'insuranceCreator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'insurance';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'lp';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'claimId';
          type: 'string';
        },
        {
          name: 'claimAmount';
          type: 'u64';
        },
        {
          name: 'claimMetadataLink';
          type: 'string';
        }
      ];
    },
    {
      name: 'refundStrategyVote';
      accounts: [
        {
          name: 'lpTokenOwner';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenisedMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'lpTokenOwnerAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposedStrategy';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposedStrategyVoteAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'voteTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'releaseSecurity';
      accounts: [
        {
          name: 'lpCreator';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'insuranceCreator';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'insuranceCreatorTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'lpUsdcAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'insurance';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'usdcMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'sendInsuranceProposal';
      accounts: [
        {
          name: 'lpCreator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'lp';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'insurance';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'proposedCommision';
          type: 'u64';
        },
        {
          name: 'proposedUndercollaterization';
          type: 'u64';
        },
        {
          name: 'proposalDocs';
          type: 'string';
        }
      ];
    },
    {
      name: 'tokeniseLp';
      accounts: [
        {
          name: 'lpCreator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenisedMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'lpCreatorTokenisedAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMetadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'tokenName';
          type: {
            option: 'string';
          };
        },
        {
          name: 'tokenSymbol';
          type: {
            option: 'string';
          };
        },
        {
          name: 'tokenMetadataUri';
          type: {
            option: 'string';
          };
        }
      ];
    },
    {
      name: 'voteClaim';
      accounts: [
        {
          name: 'voter';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'voterTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'claimTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'claimVoteAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'usdcMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'voteAmount';
          type: 'u64';
        },
        {
          name: 'voteDirection';
          type: 'bool';
        }
      ];
    },
    {
      name: 'voteStrategy';
      accounts: [
        {
          name: 'lpTokenOwner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'lp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenisedMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'insurance';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'lpTokenOwnerAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposal';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'premiumVault';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'proposedStrategy';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'proposedStrategyVoteAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'voteTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'voteAmount';
          type: 'u64';
        }
      ];
    }
  ];
  accounts: [
    {
      name: 'insurer';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'insuranceCreator';
            type: 'publicKey';
          },
          {
            name: 'verifyingDocuments';
            type: 'string';
          }
        ];
      };
    },
    {
      name: 'insurance';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'insuranceId';
            type: 'string';
          },
          {
            name: 'insurer';
            type: 'publicKey';
          },
          {
            name: 'coverage';
            type: 'u64';
          },
          {
            name: 'premium';
            type: 'u64';
          },
          {
            name: 'minimumCommission';
            type: 'u32';
          },
          {
            name: 'deductible';
            type: 'u64';
          },
          {
            name: 'expiry';
            type: 'i64';
          },
          {
            name: 'metadataLink';
            type: 'string';
          },
          {
            name: 'reinsured';
            type: 'bool';
          },
          {
            name: 'premiumDue';
            type: {
              option: 'i64';
            };
          }
        ];
      };
    },
    {
      name: 'lp';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'lpCreator';
            type: 'publicKey';
          },
          {
            name: 'insures';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'totalSecuritized';
            type: 'u64';
          },
          {
            name: 'totalAssets';
            type: 'u64';
          },
          {
            name: 'maxUndercollaterizationPromised';
            type: 'u64';
          },
          {
            name: 'undercollaterizationPromised';
            type: {
              vec: 'u64';
            };
          },
          {
            name: 'tokenised';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'reInsuranceProposal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'lpOwner';
            type: 'publicKey';
          },
          {
            name: 'proposedCommision';
            type: 'u64';
          },
          {
            name: 'proposedUndercollaterization';
            type: 'u64';
          },
          {
            name: 'insurance';
            type: 'publicKey';
          },
          {
            name: 'proposalDocs';
            type: 'string';
          },
          {
            name: 'proposalAccepted';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'premiumVault';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'reinsurance';
            type: 'publicKey';
          }
        ];
      };
    },
    {
      name: 'strategyAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'strategyProgram';
            type: 'publicKey';
          },
          {
            name: 'streamAmount';
            type: 'u64';
          },
          {
            name: 'lastStreamPayment';
            type: {
              option: 'i64';
            };
          },
          {
            name: 'streamEvery';
            type: 'i64';
          },
          {
            name: 'numberOfStreams';
            type: 'u64';
          },
          {
            name: 'strategyId';
            type: 'string';
          },
          {
            name: 'premiumVault';
            type: 'publicKey';
          },
          {
            name: 'vote';
            type: 'u64';
          },
          {
            name: 'votingStart';
            type: {
              option: 'i64';
            };
          },
          {
            name: 'strategyAccepted';
            type: 'bool';
          },
          {
            name: 'strategyBlocked';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'strategyVoteAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          }
        ];
      };
    },
    {
      name: 'claim';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'reinsurance';
            type: 'publicKey';
          },
          {
            name: 'claimId';
            type: 'string';
          },
          {
            name: 'claimAmount';
            type: 'u64';
          },
          {
            name: 'claimMetadataLink';
            type: 'string';
          },
          {
            name: 'claimVotingStart';
            type: {
              option: 'i64';
            };
          },
          {
            name: 'voteFor';
            type: 'u64';
          },
          {
            name: 'voteAgainst';
            type: 'u64';
          },
          {
            name: 'accepted';
            type: {
              option: 'bool';
            };
          },
          {
            name: 'claimed';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'claimVoteAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'voteAmount';
            type: 'u64';
          },
          {
            name: 'votedFor';
            type: 'bool';
          }
        ];
      };
    }
  ];
  events: [
    {
      name: 'InsurerRegistered';
      fields: [
        {
          name: 'insuranceCreator';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'verifyingDocuments';
          type: 'string';
          index: false;
        }
      ];
    },
    {
      name: 'InsuranceCreated';
      fields: [
        {
          name: 'insurer';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'insuranceId';
          type: 'string';
          index: false;
        },
        {
          name: 'coverage';
          type: 'u64';
          index: false;
        },
        {
          name: 'premium';
          type: 'u64';
          index: false;
        },
        {
          name: 'minimumCommission';
          type: 'u32';
          index: false;
        },
        {
          name: 'deductible';
          type: 'u64';
          index: false;
        },
        {
          name: 'expiry';
          type: 'i64';
          index: false;
        },
        {
          name: 'metadataLink';
          type: 'string';
          index: false;
        }
      ];
    },
    {
      name: 'LPCreated';
      fields: [
        {
          name: 'lpCreator';
          type: 'publicKey';
          index: false;
        }
      ];
    },
    {
      name: 'LPAssetAdded';
      fields: [
        {
          name: 'lp';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'assetAmount';
          type: 'u64';
          index: false;
        }
      ];
    },
    {
      name: 'ReInsuranceProposed';
      fields: [
        {
          name: 'lpOwner';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'proposedCommision';
          type: 'u64';
          index: false;
        },
        {
          name: 'proposedUndercollaterization';
          type: 'u64';
          index: false;
        },
        {
          name: 'insurance';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'proposalDocs';
          type: 'string';
          index: false;
        }
      ];
    },
    {
      name: 'ReInsuranceProposalAccepted';
      fields: [
        {
          name: 'reinsurance';
          type: 'publicKey';
          index: false;
        }
      ];
    },
    {
      name: 'ReInsuranceCalledOff';
      fields: [
        {
          name: 'reinsurance';
          type: 'publicKey';
          index: false;
        }
      ];
    },
    {
      name: 'PremiumPayed';
      fields: [
        {
          name: 'reinsurance';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'prepaymentTime';
          type: 'i64';
          index: false;
        }
      ];
    },
    {
      name: 'ReInsuranceClaimed';
      fields: [
        {
          name: 'reinsurance';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'claimAmount';
          type: 'u64';
          index: false;
        }
      ];
    },
    {
      name: 'LPTokenised';
      fields: [
        {
          name: 'lp';
          type: 'publicKey';
          index: false;
        }
      ];
    },
    {
      name: 'StrategyProposed';
      fields: [
        {
          name: 'strategy';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'streamAmount';
          type: 'u64';
          index: false;
        },
        {
          name: 'streamEvery';
          type: 'u64';
          index: false;
        },
        {
          name: 'numberOfStreams';
          type: 'u64';
          index: false;
        },
        {
          name: 'premiumVault';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'strategyId';
          type: 'string';
          index: false;
        }
      ];
    },
    {
      name: 'StrategyVoted';
      fields: [
        {
          name: 'strategy';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'voter';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'voteAmount';
          type: 'u64';
          index: false;
        }
      ];
    },
    {
      name: 'StrategyAccepted';
      fields: [
        {
          name: 'strategy';
          type: 'publicKey';
          index: false;
        }
      ];
    },
    {
      name: 'StrategyVoteRefunded';
      fields: [
        {
          name: 'strategy';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'refundedTo';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'refundAmount';
          type: 'u64';
          index: false;
        }
      ];
    },
    {
      name: 'ClaimRaised';
      fields: [
        {
          name: 'reinsurance';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'claim';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'claimAmount';
          type: 'u64';
          index: false;
        },
        {
          name: 'claimMetadataLink';
          type: 'string';
          index: false;
        }
      ];
    },
    {
      name: 'ClaimVoted';
      fields: [
        {
          name: 'claim';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'voter';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'voteAmount';
          type: 'u64';
          index: false;
        }
      ];
    },
    {
      name: 'ClaimDecisionReleased';
      fields: [
        {
          name: 'claim';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'decision';
          type: 'bool';
          index: false;
        }
      ];
    },
    {
      name: 'ClaimRewardReleased';
      fields: [
        {
          name: 'claim';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'rewardAmount';
          type: 'u64';
          index: false;
        }
      ];
    },
    {
      name: 'StrategyExecuted';
      fields: [
        {
          name: 'strategy';
          type: 'publicKey';
          index: false;
        }
      ];
    },
    {
      name: 'StrategyBlocked';
      fields: [
        {
          name: 'strategy';
          type: 'publicKey';
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'InsuranceExpiryTooClose';
      msg: 'Can not create insurance that exists for less than 1 month';
    },
    {
      code: 6001;
      name: 'InsuranceExpired';
      msg: 'Can not send reinsurance proposal on expired insurance';
    },
    {
      code: 6002;
      name: 'InsuranceReinsuredAlready';
      msg: 'Insurance already re-insured';
    },
    {
      code: 6003;
      name: 'CanNotCallOffReinsurance';
      msg: 'Reinsurance can not be called off unless premium more than week late';
    },
    {
      code: 6004;
      name: 'OutsideValidRange';
      msg: 'Specified metadta outside accepted range';
    },
    {
      code: 6005;
      name: 'CanNotFullFillUnderCollateralizationDemands';
      msg: 'LP can not fulfill under-collaterisation constraints';
    },
    {
      code: 6006;
      name: 'InsufficientVotingPower';
      msg: 'Not enough voting power';
    },
    {
      code: 6007;
      name: 'VotingOnStrategyClosed';
      msg: 'Voting on strategy closed!';
    },
    {
      code: 6008;
      name: 'NotEnoughVotes';
      msg: 'Not enought votes to accept';
    },
    {
      code: 6009;
      name: 'RefundDeclined';
      msg: 'Can not refund before voting closes';
    },
    {
      code: 6010;
      name: 'ClaimTooHigh';
      msg: 'Can not raise claim greater than coverage amount';
    },
    {
      code: 6011;
      name: 'ClaimVotingClosed';
      msg: 'Claim voting closes after 1 month';
    },
    {
      code: 6012;
      name: 'DecisionNotYetReleased';
      msg: 'Can not release decision before voting closes';
    },
    {
      code: 6013;
      name: 'ClaimVoteDidNotWin';
      msg: 'Sadly your claim vote did not win!';
    },
    {
      code: 6014;
      name: 'IncorrectRewardAmount';
      msg: 'Incorrect Reward entered';
    },
    {
      code: 6015;
      name: 'StrategyAllocationTooHigh';
      msg: 'Strategy can not use fund higher than allocated';
    },
    {
      code: 6016;
      name: 'StreamMaturationNotYetReached';
      msg: 'Stream date not yet reached';
    },
    {
      code: 6017;
      name: 'StrategyStreamsEnded';
      msg: 'All strategy streams already payed';
    },
    {
      code: 6018;
      name: 'StrategyBlocked';
      msg: 'Strategy blocked due to security reasons';
    }
  ];
};

export const IDL: Insurance = {
  version: '0.1.0',
  name: 'insurance',
  constants: [
    {
      name: 'AUTHORIZED_PUBLIC_KEY',
      type: 'publicKey',
      value: 'pubkey ! ("55kBY9yxqSC42boV8PywT2gqGzgLi5MPAtifNRgPNezF")',
    },
    {
      name: 'MINUTE',
      type: 'i64',
      value: '60',
    },
    {
      name: 'HOUR',
      type: 'i64',
      value: '60 * MINUTE',
    },
    {
      name: 'DAY',
      type: 'i64',
      value: '24 * HOUR',
    },
    {
      name: 'WEEK',
      type: 'i64',
      value: '7 * DAY',
    },
    {
      name: 'TWO_WEEKS',
      type: 'i64',
      value: '2 * WEEK',
    },
    {
      name: 'MONTH',
      type: 'i64',
      value: '30 * DAY',
    },
    {
      name: 'DEFAULT_MINT_DECIMALS',
      type: 'u8',
      value: '6',
    },
  ],
  instructions: [
    {
      name: 'registerInsurer',
      accounts: [
        {
          name: 'insuranceCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'insurer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'verifyingDocuments',
          type: 'string',
        },
      ],
    },
    {
      name: 'registerLp',
      accounts: [
        {
          name: 'lpCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'registerInsurance',
      accounts: [
        {
          name: 'insuranceCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'insurer',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'insurance',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'insuranceId',
          type: 'string',
        },
        {
          name: 'coverage',
          type: 'u64',
        },
        {
          name: 'premium',
          type: 'u64',
        },
        {
          name: 'minimumCommission',
          type: 'u32',
        },
        {
          name: 'deductible',
          type: 'u64',
        },
        {
          name: 'expiry',
          type: 'i64',
        },
        {
          name: 'metadataLink',
          type: 'string',
        },
      ],
    },
    {
      name: 'acceptReinsuranceProposal',
      accounts: [
        {
          name: 'insuranceCreator',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'insurance',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'addSecurity',
      accounts: [
        {
          name: 'lpCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lpCreatorUsdcAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lpUsdcAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'usdcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'transferAmount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'acceptStrategy',
      accounts: [
        {
          name: 'strategyAccepter',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenisedMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'insurance',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'premiumVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposedStrategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'blockStrategy',
      accounts: [
        {
          name: 'authorisedAddress',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'proposedStrategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'callOffReinsurance',
      accounts: [
        {
          name: 'lpCreator',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lpUsdcAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'insurance',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'premiumVault',
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: 'premiumVaultTokenAccount',
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: 'usdcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'claimDecision',
      accounts: [
        {
          name: 'decisionAsker',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'claim',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'claimVotingReward',
      accounts: [
        {
          name: 'voter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'claim',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'voterTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'claimTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'claimVoteAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'usdcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'rewardAmount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'executeStrategy',
      accounts: [
        {
          name: 'executor',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'proposal',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'insurance',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'premiumVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'premiumVaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposedStrategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategyProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'executorAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'usdcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'payPremium',
      accounts: [
        {
          name: 'insuranceCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'insuranceCreatorTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'insurance',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'premiumVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'premiumVaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'usdcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'premiumMultiplier',
          type: 'u64',
        },
      ],
    },
    {
      name: 'proposeStrategy',
      accounts: [
        {
          name: 'strategyProposer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'premiumVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposedStrategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategyProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'strategyId',
          type: 'string',
        },
        {
          name: 'streamPayment',
          type: 'u64',
        },
        {
          name: 'streamEvery',
          type: 'u64',
        },
        {
          name: 'numberOfStreams',
          type: 'u64',
        },
      ],
    },
    {
      name: 'raiseClaim',
      accounts: [
        {
          name: 'insuranceCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'insurance',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lp',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'claim',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'claimId',
          type: 'string',
        },
        {
          name: 'claimAmount',
          type: 'u64',
        },
        {
          name: 'claimMetadataLink',
          type: 'string',
        },
      ],
    },
    {
      name: 'refundStrategyVote',
      accounts: [
        {
          name: 'lpTokenOwner',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenisedMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lpTokenOwnerAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposedStrategy',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposedStrategyVoteAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'voteTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'releaseSecurity',
      accounts: [
        {
          name: 'lpCreator',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'insuranceCreator',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'insuranceCreatorTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lpUsdcAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'insurance',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'usdcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'claim',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'sendInsuranceProposal',
      accounts: [
        {
          name: 'lpCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lp',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'insurance',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'proposedCommision',
          type: 'u64',
        },
        {
          name: 'proposedUndercollaterization',
          type: 'u64',
        },
        {
          name: 'proposalDocs',
          type: 'string',
        },
      ],
    },
    {
      name: 'tokeniseLp',
      accounts: [
        {
          name: 'lpCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenisedMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lpCreatorTokenisedAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMetadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'tokenName',
          type: {
            option: 'string',
          },
        },
        {
          name: 'tokenSymbol',
          type: {
            option: 'string',
          },
        },
        {
          name: 'tokenMetadataUri',
          type: {
            option: 'string',
          },
        },
      ],
    },
    {
      name: 'voteClaim',
      accounts: [
        {
          name: 'voter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'claim',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'voterTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'claimTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'claimVoteAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'usdcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'voteAmount',
          type: 'u64',
        },
        {
          name: 'voteDirection',
          type: 'bool',
        },
      ],
    },
    {
      name: 'voteStrategy',
      accounts: [
        {
          name: 'lpTokenOwner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenisedMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'insurance',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lpTokenOwnerAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposal',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'premiumVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proposedStrategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'proposedStrategyVoteAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'voteTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'voteAmount',
          type: 'u64',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'insurer',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'insuranceCreator',
            type: 'publicKey',
          },
          {
            name: 'verifyingDocuments',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'insurance',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'insuranceId',
            type: 'string',
          },
          {
            name: 'insurer',
            type: 'publicKey',
          },
          {
            name: 'coverage',
            type: 'u64',
          },
          {
            name: 'premium',
            type: 'u64',
          },
          {
            name: 'minimumCommission',
            type: 'u32',
          },
          {
            name: 'deductible',
            type: 'u64',
          },
          {
            name: 'expiry',
            type: 'i64',
          },
          {
            name: 'metadataLink',
            type: 'string',
          },
          {
            name: 'reinsured',
            type: 'bool',
          },
          {
            name: 'premiumDue',
            type: {
              option: 'i64',
            },
          },
        ],
      },
    },
    {
      name: 'lp',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'lpCreator',
            type: 'publicKey',
          },
          {
            name: 'insures',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'totalSecuritized',
            type: 'u64',
          },
          {
            name: 'totalAssets',
            type: 'u64',
          },
          {
            name: 'maxUndercollaterizationPromised',
            type: 'u64',
          },
          {
            name: 'undercollaterizationPromised',
            type: {
              vec: 'u64',
            },
          },
          {
            name: 'tokenised',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'reInsuranceProposal',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'lpOwner',
            type: 'publicKey',
          },
          {
            name: 'proposedCommision',
            type: 'u64',
          },
          {
            name: 'proposedUndercollaterization',
            type: 'u64',
          },
          {
            name: 'insurance',
            type: 'publicKey',
          },
          {
            name: 'proposalDocs',
            type: 'string',
          },
          {
            name: 'proposalAccepted',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'premiumVault',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'reinsurance',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'strategyAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'strategyProgram',
            type: 'publicKey',
          },
          {
            name: 'streamAmount',
            type: 'u64',
          },
          {
            name: 'lastStreamPayment',
            type: {
              option: 'i64',
            },
          },
          {
            name: 'streamEvery',
            type: 'i64',
          },
          {
            name: 'numberOfStreams',
            type: 'u64',
          },
          {
            name: 'strategyId',
            type: 'string',
          },
          {
            name: 'premiumVault',
            type: 'publicKey',
          },
          {
            name: 'vote',
            type: 'u64',
          },
          {
            name: 'votingStart',
            type: {
              option: 'i64',
            },
          },
          {
            name: 'strategyAccepted',
            type: 'bool',
          },
          {
            name: 'strategyBlocked',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'strategyVoteAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'claim',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'reinsurance',
            type: 'publicKey',
          },
          {
            name: 'claimId',
            type: 'string',
          },
          {
            name: 'claimAmount',
            type: 'u64',
          },
          {
            name: 'claimMetadataLink',
            type: 'string',
          },
          {
            name: 'claimVotingStart',
            type: {
              option: 'i64',
            },
          },
          {
            name: 'voteFor',
            type: 'u64',
          },
          {
            name: 'voteAgainst',
            type: 'u64',
          },
          {
            name: 'accepted',
            type: {
              option: 'bool',
            },
          },
          {
            name: 'claimed',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'claimVoteAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'voteAmount',
            type: 'u64',
          },
          {
            name: 'votedFor',
            type: 'bool',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'InsurerRegistered',
      fields: [
        {
          name: 'insuranceCreator',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'verifyingDocuments',
          type: 'string',
          index: false,
        },
      ],
    },
    {
      name: 'InsuranceCreated',
      fields: [
        {
          name: 'insurer',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceId',
          type: 'string',
          index: false,
        },
        {
          name: 'coverage',
          type: 'u64',
          index: false,
        },
        {
          name: 'premium',
          type: 'u64',
          index: false,
        },
        {
          name: 'minimumCommission',
          type: 'u32',
          index: false,
        },
        {
          name: 'deductible',
          type: 'u64',
          index: false,
        },
        {
          name: 'expiry',
          type: 'i64',
          index: false,
        },
        {
          name: 'metadataLink',
          type: 'string',
          index: false,
        },
      ],
    },
    {
      name: 'LPCreated',
      fields: [
        {
          name: 'lpCreator',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'LPAssetAdded',
      fields: [
        {
          name: 'lp',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'assetAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'ReInsuranceProposed',
      fields: [
        {
          name: 'lpOwner',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'proposedCommision',
          type: 'u64',
          index: false,
        },
        {
          name: 'proposedUndercollaterization',
          type: 'u64',
          index: false,
        },
        {
          name: 'insurance',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'proposalDocs',
          type: 'string',
          index: false,
        },
      ],
    },
    {
      name: 'ReInsuranceProposalAccepted',
      fields: [
        {
          name: 'reinsurance',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'ReInsuranceCalledOff',
      fields: [
        {
          name: 'reinsurance',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'PremiumPayed',
      fields: [
        {
          name: 'reinsurance',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'prepaymentTime',
          type: 'i64',
          index: false,
        },
      ],
    },
    {
      name: 'ReInsuranceClaimed',
      fields: [
        {
          name: 'reinsurance',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'claimAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'LPTokenised',
      fields: [
        {
          name: 'lp',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'StrategyProposed',
      fields: [
        {
          name: 'strategy',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'streamAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'streamEvery',
          type: 'u64',
          index: false,
        },
        {
          name: 'numberOfStreams',
          type: 'u64',
          index: false,
        },
        {
          name: 'premiumVault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'strategyId',
          type: 'string',
          index: false,
        },
      ],
    },
    {
      name: 'StrategyVoted',
      fields: [
        {
          name: 'strategy',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'voter',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'voteAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'StrategyAccepted',
      fields: [
        {
          name: 'strategy',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'StrategyVoteRefunded',
      fields: [
        {
          name: 'strategy',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'refundedTo',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'refundAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'ClaimRaised',
      fields: [
        {
          name: 'reinsurance',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'claim',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'claimAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'claimMetadataLink',
          type: 'string',
          index: false,
        },
      ],
    },
    {
      name: 'ClaimVoted',
      fields: [
        {
          name: 'claim',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'voter',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'voteAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'ClaimDecisionReleased',
      fields: [
        {
          name: 'claim',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'decision',
          type: 'bool',
          index: false,
        },
      ],
    },
    {
      name: 'ClaimRewardReleased',
      fields: [
        {
          name: 'claim',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'rewardAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'StrategyExecuted',
      fields: [
        {
          name: 'strategy',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'StrategyBlocked',
      fields: [
        {
          name: 'strategy',
          type: 'publicKey',
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InsuranceExpiryTooClose',
      msg: 'Can not create insurance that exists for less than 1 month',
    },
    {
      code: 6001,
      name: 'InsuranceExpired',
      msg: 'Can not send reinsurance proposal on expired insurance',
    },
    {
      code: 6002,
      name: 'InsuranceReinsuredAlready',
      msg: 'Insurance already re-insured',
    },
    {
      code: 6003,
      name: 'CanNotCallOffReinsurance',
      msg: 'Reinsurance can not be called off unless premium more than week late',
    },
    {
      code: 6004,
      name: 'OutsideValidRange',
      msg: 'Specified metadta outside accepted range',
    },
    {
      code: 6005,
      name: 'CanNotFullFillUnderCollateralizationDemands',
      msg: 'LP can not fulfill under-collaterisation constraints',
    },
    {
      code: 6006,
      name: 'InsufficientVotingPower',
      msg: 'Not enough voting power',
    },
    {
      code: 6007,
      name: 'VotingOnStrategyClosed',
      msg: 'Voting on strategy closed!',
    },
    {
      code: 6008,
      name: 'NotEnoughVotes',
      msg: 'Not enought votes to accept',
    },
    {
      code: 6009,
      name: 'RefundDeclined',
      msg: 'Can not refund before voting closes',
    },
    {
      code: 6010,
      name: 'ClaimTooHigh',
      msg: 'Can not raise claim greater than coverage amount',
    },
    {
      code: 6011,
      name: 'ClaimVotingClosed',
      msg: 'Claim voting closes after 1 month',
    },
    {
      code: 6012,
      name: 'DecisionNotYetReleased',
      msg: 'Can not release decision before voting closes',
    },
    {
      code: 6013,
      name: 'ClaimVoteDidNotWin',
      msg: 'Sadly your claim vote did not win!',
    },
    {
      code: 6014,
      name: 'IncorrectRewardAmount',
      msg: 'Incorrect Reward entered',
    },
    {
      code: 6015,
      name: 'StrategyAllocationTooHigh',
      msg: 'Strategy can not use fund higher than allocated',
    },
    {
      code: 6016,
      name: 'StreamMaturationNotYetReached',
      msg: 'Stream date not yet reached',
    },
    {
      code: 6017,
      name: 'StrategyStreamsEnded',
      msg: 'All strategy streams already payed',
    },
    {
      code: 6018,
      name: 'StrategyBlocked',
      msg: 'Strategy blocked due to security reasons',
    },
  ],
};
